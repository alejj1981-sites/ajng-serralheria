import React from 'react';
import { useNavScroll } from '../../hooks/useNavScroll';

export const Navbar: React.FC = () => {
  useNavScroll();

  return (
    <header>
      <nav id="navbar">
      <div className="nav-logo">
        <div className="nav-logo-mark">AJNG</div>
        <div className="nav-logo-sub">Serralheria<br/>Steel Frame</div>
      </div>
      <a 
        href="https://wa.me/5511940885781?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento" 
        className="nav-cta"
        aria-label="Falar com a AJNG Serralheria pelo WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Orçamento Grátis
      </a>
      </nav>
    </header>
  );
};
