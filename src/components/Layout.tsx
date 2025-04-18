import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
