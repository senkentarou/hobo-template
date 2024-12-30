import { Button, PageTitle, Paragraph } from '@freee_jp/vibes';

export const NotFound = () => {
  return (
    <>
      <PageTitle>お探しのページは見つかりませんでした</PageTitle>
      <Paragraph>お探しのページは存在しないか、移動した可能性があります。</Paragraph>

      <Button href="/" mt={1} primary>
        ホームへ戻る
      </Button>
    </>
  );
};
