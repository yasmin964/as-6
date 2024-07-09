import React from 'react';
import styles from '@styles/global.module.css';
import Image from 'next/image';

interface HeaderProps {
  headerLinks: { href: string; icon: string }[];
  headerContent: { href: string; text: string }[];
}

const Header: React.FC<HeaderProps> = ({ headerLinks, headerContent }) => {
  return (
    <header className={styles.header}>
      <div className={styles.s_text}>
        {headerLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <Image src={link.icon} alt="" width="20" height="20" />
          </a>
        ))}
      </div>
      <div className={styles.header__content}>
        {headerContent.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </header>
  );
};
export default Header;
