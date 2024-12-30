import { GlobalNavi, LinkContent } from '@freee_jp/vibes';

export const Navi = ({ links }: { links: LinkContent[] }) => {
  return <GlobalNavi hideHelpForm links={links} />;
};
