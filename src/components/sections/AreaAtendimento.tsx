import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AreaAtendimento: React.FC = () => {
  useScrollReveal();

  return (
    <section className="area">
      <div className="area-inner">
        <div className="area-info reveal-left">
          <div className="section-label">Onde Atuamos</div>
          <h2 className="section-title">Área de <em>Atendimento</em></h2>
          <p style={{ fontSize: '14px', color: 'var(--white-dim)', lineHeight: 1.7, marginBottom: 0 }}>
            Atendemos Jardim Shangrila, região e cidades próximas. Entre em contato para confirmar disponibilidade na sua área.
          </p>
          <div className="contact-block">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-text">
                <strong>Endereço</strong>
                <span>Rua dos Ralideos, 95 — Jd. Shangrila</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.06 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="contact-text">
                <strong>WhatsApp / Telefone</strong>
                <span>(11) 94088-5781</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-text">
                <strong>Orçamento</strong>
                <span>Sem compromisso · Resposta rápida</span>
              </div>
            </div>
          </div>
          <a href="https://wa.me/5511940885781?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20voc%C3%AAs%20atendem%20na%20minha%20regi%C3%A3o" className="btn-primary" style={{ marginTop: '36px', display: 'inline-block' }}>Verificar Minha Região →</a>
        </div>
        <div className="reveal-right">
          <a href="https://www.google.com/maps/place/R.+dos+Ral%C3%ADdeos,+95+-+Jardim+Shangrila+(Zona+Norte),+S%C3%A3o+Paulo+-+SP,+02990-100/@-23.4295523,-46.7301195,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefba037515fc1:0x3ecb50e16b7f5025!8m2!3d-23.4295572!4d-46.7275446!16s%2Fg%2F11cs83_rlx?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className="map-box" style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <div className="map-pin">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" style={{ opacity: 0.4, color: 'var(--blue)' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="map-address">
                <div style={{ fontSize: '16px', color: 'var(--white)', marginBottom: '8px', fontWeight: 600 }}>Jardim Shangrila</div>
                <div style={{ fontSize: '11px', color: 'var(--white-faint)', lineHeight: 1.6 }}>Rua dos Ralideos, 95<br />São Paulo — SP</div>
                <div style={{ fontSize: '12px', color: 'var(--blue)', marginTop: '8px', fontWeight: 500 }}>Ver no mapa →</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
