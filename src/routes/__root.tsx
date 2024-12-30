import { ReactNode } from 'react';

import { Breadcrumbs, VibesProvider } from '@freee_jp/vibes';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';

import { Footer, Header, Navi, NotFound } from './-components';
import { useRootStore } from './-hooks';

const StyledMain = styled.main`
  width: calc(100vw - 3rem);
  height: calc(100vh - 3rem);
  margin: 0 auto;
  padding: 1rem 0;
`;

const RootComponent = () => {
  const {
    computed: { currentLocationName, breadcrumbs, navis },
  } = useRootStore();

  const PageTitle = () => {
    return (
      <Helmet>
        {currentLocationName.length > 0 ? (
          <title>Hobo Template | {currentLocationName}</title>
        ) : (
          <title>Hobo Template</title>
        )}
      </Helmet>
    );
  };

  return (
    <>
      <PageTitle />
      <Header />
      <Navi links={navis} />
      <StyledMain>
        {breadcrumbs.length > 0 && <Breadcrumbs links={breadcrumbs} mb={0.5} />}
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <VibesProvider fixedLayout={false} lang="ja" portalParent={document.body}>
      <HelmetProvider>{children}</HelmetProvider>
    </VibesProvider>
  );
};

export const Route = createRootRoute({
  component: () => {
    return (
      <ContextProvider>
        <RootComponent />
      </ContextProvider>
    );
  },
  notFoundComponent: NotFound,
});
