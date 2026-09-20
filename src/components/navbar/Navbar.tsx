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
    <header className="navbar" id="home" onKeyDown={(event) => {
      if (event.key === 'Escape') closeMenu();
    }}>
      <a className="logo" href="#home" onClick={closeMenu} aria-label="Promonist home">
        <img src="/images/promonist-logo.png" alt="Promonist" width="171" height="53" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span /><span /><span />
      </button>

      <nav className={`nav-menu${menuOpen ? ' nav-open' : ''}`} id="main-navigation" aria-label="Main navigation">
        <div className="nav-links">
          <a href="#home" onClick={closeMenu}>HOME</a>
          <a href="#how-it-works" onClick={closeMenu}>HOW IT WORKS</a>
          <button type="button" onClick={() => openDialog('pricing')}>PRICING</button>
          <button type="button" onClick={() => openDialog('reviews')}>REVIEWS</button>
        </div>
        <div className="auth-buttons">
          <button className="auth-button" type="button" onClick={() => openDialog('login')}><span>LOG IN</span></button>
          <button className="auth-button" type="button" onClick={() => openDialog('signup')}><span>SIGN UP</span></button>
        </div>
      </nav>
    </header>
  );
}
