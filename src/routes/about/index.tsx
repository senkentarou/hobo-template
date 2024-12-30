import { ContentsBase, GridBlock, GridWrapper, InlineLink, ListCard, MaterialIcon, Paragraph } from '@freee_jp/vibes';
import { createFileRoute } from '@tanstack/react-router';
import { MdOutlinePerson, MdOutlineDesignServices, MdOutlineSearchOff } from 'react-icons/md';

const RouteComponent = () => {
  return (
    <ContentsBase>
      <GridWrapper>
        <GridBlock size="half">
          <ListCard thumbnail={<MaterialIcon IconComponent={MdOutlinePerson} />} title="自己紹介" url="/about/me">
            <Paragraph>senkentarouについて説明します。</Paragraph>
          </ListCard>
        </GridBlock>
        <GridBlock size="half">
          <ListCard
            thumbnail={<MaterialIcon IconComponent={MdOutlineDesignServices} />}
            title="vibesの紹介"
            url="/about/vibes"
          >
            <Paragraph>
              <InlineLink href="https://corp.freee.co.jp/" target="_blank">
                フリー株式会社
              </InlineLink>
              で使用されているデザインシステムについて説明します。
            </Paragraph>
          </ListCard>
        </GridBlock>
      </GridWrapper>
      <GridWrapper mt={1}>
        <GridBlock size="half">
          <ListCard
            thumbnail={<MaterialIcon IconComponent={MdOutlineSearchOff} />}
            title="へんなページ"
            url="/hogehoge"
          >
            <Paragraph>NotFoundページに移動します。動作確認用です。</Paragraph>
          </ListCard>
        </GridBlock>
      </GridWrapper>
    </ContentsBase>
  );
};

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
});
