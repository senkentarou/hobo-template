import { PageTitle, Paragraph, SectionTitle } from '@freee_jp/vibes';
import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return (
    <>
      <PageTitle>ほぼテンプレートへようこそ</PageTitle>
      <SectionTitle mt={0.5}>これは何？</SectionTitle>
      <Paragraph>
        いわゆるフロントエンド開発における現時点での個人的な理想構成を考え、他プロジェクトに再利用するために用意したテンプレートです。
        <br />
        「ほぼ」と付けたのはプロジェクトによってここからカスタマイズすることが必要という意思を込めたためです。
        <br />
        このテンプレート自体は静的コンテンツで完結するようにしています。ここから動的コンテンツと組み合わせて使う想定です。
      </Paragraph>
      <SectionTitle mt={0.5}>使用技術</SectionTitle>
      <Paragraph>Vite + React + TypeScript + TanStack Router + freee vibes + ESLint + Prettier + neovim</Paragraph>
      <SectionTitle mt={0.5}>動作確認環境</SectionTitle>
      <Paragraph>MacBookPro 2022 13inch CPU:M2 Mem:16GB macOS:Sequoia(15.1.1)</Paragraph>
    </>
  );
};

export const Route = createFileRoute('/')({
  component: RouteComponent,
});
