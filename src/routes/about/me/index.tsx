import { PageTitle, Paragraph } from '@freee_jp/vibes';
import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return (
    <>
      <PageTitle>senkentarouの紹介</PageTitle>
      <Paragraph>
        1995年生まれ。大阪府出身。
        <br />
        同志社大学・大学院を経て2020年にフリー株式会社に新卒入社。
        入社よりアプリケーションエンジニアとして主にfreee申告・freee販売・freee工数管理(旧freeeプロジェクト管理)サービスの開発・運用・保守を経験。
        <br />
        現在はマネジメント領域に注力しており、20名規模の開発組織のEM(EngineerManager)として各メンバーの成長支援や組織の一体感醸成、さらにはその結果生み出される開発生産性の向上に取り組んでいる。
        <br />
        名前の由来は小学生のときのあだ名。なんか犬っぽいね、という話となぜか名字の一部を改変するのが組み合わさり、さらにはなぜか太郎を付けてフルネームのようにしたいという要望から誕生した記憶。
        漢字表記は千犬太郎。
        <br />
        理工学修士(情報工学)
      </Paragraph>
    </>
  );
};

export const Route = createFileRoute('/about/me/')({
  component: RouteComponent,
});
