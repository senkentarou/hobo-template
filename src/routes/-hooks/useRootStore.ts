import { useMemo } from 'react';

import { LinkContent } from '@freee_jp/vibes';
import { useLocation, useMatches } from '@tanstack/react-router';
import { MdOutlineHome, MdOutlineRouter } from 'react-icons/md';

// TODO: i18n対応
const t: { [key: string]: string } = {
  '/': 'ホーム',
  '/about': '紹介',
  '/about/me': '自己紹介',
  '/about/vibes': 'Vibesの紹介',
};

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
    return t[location.pathname] || '';
  }, [location.pathname]);

  const navis = useMemo(() => {
    return [
      {
        title: t['/'],
        url: '/',
        IconComponent: MdOutlineHome,
        current: location.pathname === '/',
      },
      {
        title: t['/about'],
        url: '/about',
        IconComponent: MdOutlineRouter,
        current: location.pathname !== '/' && currentPaths.includes(location.pathname),
      },
    ];
  }, [location.pathname, currentPaths]);

  const breadcrumbs = useMemo(() => {
    // 1階層: root
    // 2階層: グロナビ
    // 2階層未満の場合はグロナビから到達できる想定なので表示しない
    if (currentPaths.length <= 2) return [];

    return currentPaths.map((path) => {
      return {
        title: t[path],
        url: location.pathname === path ? undefined : path, // 現在のページはリンク付けない
      };
    });
  }, [location.pathname, currentPaths]);

  return { currentPaths, currentLocationName, breadcrumbs, navis };
};

export const useRootStore = (): RootStore => {
  const computed = useComputed();
  return { computed };
};
