import { createFileRoute, Outlet } from '@tanstack/react-router';

// ファイルベースルーティングでドメイン毎にフォルダ管理をしてcomponentやhooksを分割したいが、
// 現在はドメインに対するルートファイルを親フォルダに配置する必要がある。
// https://github.com/TanStack/router/issues/832
const RouteComponent = () => {
  return <Outlet />;
};

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});
