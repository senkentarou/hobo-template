import { BulletedList, InlineLink, PageTitle, Paragraph, SectionTitle } from '@freee_jp/vibes';
import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return (
    <>
      <PageTitle>vibesの紹介</PageTitle>
      <SectionTitle mt={0.5}>vibesとは</SectionTitle>
      <Paragraph>
        vibesは、
        <InlineLink href="https://corp.freee.co.jp/" target="_blank">
          フリー株式会社
        </InlineLink>
        で使用されているデザインシステムです。2023年の12月に一般公開されました。
        <br />
        このほぼテンプレートプロジェクトにも使用しています。
        <br />
        READMEの最初の方にTBDが堂々と書いているなど、まだまだ開発途中な面もありますが、
        元々が自然とフリー株式会社が定めるアクセシビリティー・ガイドラインが満たされるように設計されているというのもあり、開発者としてはビジネスロジックに集中しやすいので使いやすいです。オススメです。
      </Paragraph>
      <SectionTitle mt={0.5}>参考文献</SectionTitle>
      <BulletedList
        listContents={[
          {
            value: 'freeeアクセシビリティー・ガイドライン',
            url: 'https://a11y-guidelines.freee.co.jp/',
            target: '_blank',
          },
          {
            value:
              'freee、デザインシステム「vibes」を公開　アクセシビリティをはじめとするフロントエンド開発のノウハウが満載',
            url: 'https://corp.freee.co.jp/news/20231219_design.html',
            target: '_blank',
          },
          {
            value: 'デザインシステム “Vibes” の育てかた',
            url: 'https://developers.freee.co.jp/entry/growing-vibes',
            target: '_blank',
          },
          {
            value: 'GitHub repository',
            url: 'https://github.com/freee/vibes',
            target: '_blank',
          },
        ]}
      />
    </>
  );
};

export const Route = createFileRoute('/about/vibes/')({
  component: RouteComponent,
});
