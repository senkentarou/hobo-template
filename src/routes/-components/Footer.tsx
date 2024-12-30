import { Footer as VibesFooter, Vibes2021Base1Color, VibesBlackColor } from '@freee_jp/vibes';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: ${VibesBlackColor};
  background-color: ${Vibes2021Base1Color};
  min-height: 5rem; // 表示コンテンツの量により調節すること。
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <VibesFooter
        copyright="© 2024 senkentarou"
        disableAppStoreBadge
        disableGooglePlayBadge
        links={[]}
        width="wide"
      />
    </StyledFooter>
  );
};
