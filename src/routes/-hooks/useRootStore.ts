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
    return matches.map((m) => m.pathname.replace(/(.+)\/$/, '$1')).filter((p, idx, self) => self.indexOf(p) === idx);
  }, [matches]);

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
        url: location.pathname === path ? undefined : path, // 現在のページはリンクを無効にする
      };
    });
  }, [location.pathname, currentPaths]);

  return { currentPaths, breadcrumbs, navis };
};

export const useRootStore = (): RootStore => {
  const computed = useComputed();
  return { computed };
};
