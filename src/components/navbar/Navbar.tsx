import { useState } from 'react';
import type { DialogKey } from '../infoDialog/dialogContent';
import './navbar.scss';

type NavbarProps = {
  onOpenDialog: (dialog: DialogKey) => void;
};

export default function Navbar({ onOpenDialog }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openDialog = (key: DialogKey) => {
    onOpenDialog(key);
    closeMenu();
  };

  return (
    <header className="site-header" id="home">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Promonist home">
        <img src="/images/promonist-logo.png" alt="Promonist" width="171" height="53" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>

      <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} id="main-navigation" aria-label="Main navigation">
        <div className="site-nav__pages">
          <a href="#home" onClick={closeMenu}>HOME</a>
          <a href="#how-it-works" onClick={closeMenu}>HOW IT WORKS</a>
          <button type="button" onClick={() => openDialog('pricing')}>PRICING</button>
          <button type="button" onClick={() => openDialog('reviews')}>REVIEWS</button>
        </div>
        <div className="site-nav__account">
          <button className="account-button" type="button" onClick={() => openDialog('login')}><span>LOG IN</span></button>
          <button className="account-button" type="button" onClick={() => openDialog('signup')}><span>SIGN UP</span></button>
        </div>
      </nav>
    </header>
  );
}
