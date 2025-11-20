import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideNavFooter = ['/interview'].some(path => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {!hideNavFooter && <Navigation />}
      <main className={hideNavFooter ? '' : 'pt-16'}>
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;