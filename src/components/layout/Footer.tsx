import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-logo">AJNG</div>
      <div className="footer-copy">© 2025 — Serralheria AJNG · Steel Frame</div>
      <div className="footer-links">
        <a 
          href="https://wa.me/5511940885781"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a href="tel:+5511940885781">Telefone</a>
      </div>
    </footer>
  );
};
