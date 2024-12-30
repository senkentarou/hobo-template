import { useMemo } from 'react';

import { LinkContent } from '@freee_jp/vibes';
import { useLocation, useMatches } from '@tanstack/react-router';
// INFO: 現状はNavisとBreadcrumbsの実装のためだけに使用。
// プロダクト全体で使用する場合は以下を考えたい
//  ・定義漏れをしたときの検知方法 (開発時にアクセスしたときに絶対落とす仕組み and 片方言語のみ定義できない仕組み)
//  ・より簡単な定義方法 (コードの内容分析 or AI活用)
//  ・意図が伝わる翻訳 (多言語対応する覚悟)
import { useTranslation } from 'react-i18next';
import { MdOutlineHome, MdOutlineRouter } from 'react-icons/md';

type Breadcrumb = { title: string; url?: string };

type Computed = {
  currentPaths: string[];
  currentLocationName: string;
  breadcrumbs: Breadcrumb[];
  navis: LinkContent[];
};

type RootStore = {
  computed: Computed;
};

const useComputed = (): Computed => {
  const { t } = useTranslation();
  const matches = useMatches();
  const location = useLocation();

  const currentPaths = useMemo(() => {
    // root('/')以外のパスで末尾のスラッシュを削除して重複を除外したものを集める
    // INFO:
    // useMatchesはrouteTreeを深さ優先探索でpathを取得しているように見えるが
    // 仕様変更時に探索手法が変わると配列の順番が変わってしまうためBreadcrumbsの仕様変更も同時に検討が必要となる。
    // https://github.com/TanStack/router/blob/4cad52b3a5f67172e0545249b16350175b559bb6/packages/react-router/src/router.ts#L927-L960
    return matches.map((m) => m.pathname.replace(/(.+)\/$/, '$1')).filter((p, idx, self) => self.indexOf(p) === idx);
  }, [matches]);

  const currentLocationName = useMemo(() => {
    return t(location.pathname) || '';
  }, [t, location.pathname]);

  const navis = useMemo(() => {
    return [
      {
        title: t('/'),
        url: '/',
        IconComponent: MdOutlineHome,
        current: location.pathname === '/', // rootの場合はそれ配下の階層は別のNavを示すことを前提とするため完全一致で判定
      },
      {
        title: t('/about'),
        url: '/about',
        IconComponent: MdOutlineRouter,
        current: location.pathname !== '/' && currentPaths.includes(location.pathname), // root以外の場合は現在のパスにグロナビに含まれている場合で判定
      },
    ];
  }, [t, location.pathname, currentPaths]);

  const breadcrumbs = useMemo(() => {
    // 1階層: root
    // 2階層: グロナビ
    // 2階層未満の場合はグロナビから到達できる想定なので表示しない
    if (currentPaths.length <= 2) return [];

    return currentPaths.map((path) => {
      return {
        title: t(path),
        url: location.pathname === path ? undefined : path, // 現在のページはリンク付けない
      };
    });
  }, [t, location.pathname, currentPaths]);

  return { currentPaths, currentLocationName, breadcrumbs, navis };
};

export const useRootStore = (): RootStore => {
  const computed = useComputed();
  return { computed };
};
