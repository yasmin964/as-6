// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '@styles/global.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const headerLinks = [
  { href: 'https://t.me/yapii7', icon: '/img/Telegram_i.png' },
  {
    href: 'https://github.com/yasmin964?tab=repositories',
    icon: '/img/GitHub.png',
  },
  { href: 'mailto:kalgexavva1970@icloud.com', icon: '/img/email.png' },
];

const headerContent = [
  { href: '/', text: 'Home' },
  { href: '/comics', text: 'Comics' },
  { href: '/projectlist', text: 'Project List' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header headerLinks={headerLinks} headerContent={headerContent} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
