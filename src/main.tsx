import { StrictMode } from 'react';

import '@freee_jp/vibes/css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { createRoot } from 'react-dom/client';

import './i18n/config.ts';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root') as HTMLElement;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
      {import.meta.env.MODE === 'development' && <TanStackRouterDevtools router={router} />}
    </StrictMode>,
  );
}
