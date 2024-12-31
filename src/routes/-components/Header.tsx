import { Header as VibesHeader, IconOnlyButton, StatusIcon } from '@freee_jp/vibes';
import { FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <VibesHeader
      logo={
        <StatusIcon mt={1} type="success">
          senkentarou page
        </StatusIcon>
      }
      logoUrl="/"
      sectionNode={
        <IconOnlyButton
          IconComponent={FaGithub}
          appearance="tertiary"
          href="https://github.com/senkentarou"
          label="github"
          target="_blank"
        />
      }
    />
  );
};
