import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Diferenciais: React.FC = () => {
  useScrollReveal();

  return (
    <section className="diferenciais">
      <div className="section-label reveal">Por Que Nos Escolher</div>
      <h2 className="section-title reveal">Nossos <em>Diferenciais</em></h2>
      <div className="diff-grid">
        
        <div className="diff-card reveal">
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="8" r="4"/>
              <path d="M6 20v-2a6 6 0 0112 0v2"/>
              <path d="M17 11l1.5 1.5L21 10"/>
            </svg>
          </div>
          <div className="diff-title">10+ Anos de Experiência</div>
          <p className="diff-desc">Décadas de prática garantem que cada projeto seja executado com precisão técnica e segurança.</p>
        </div>

        <div className="diff-card reveal" style={{ transitionDelay: '.1s' }}>
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
            </svg>
          </div>
          <div className="diff-title">Projeto Sob Medida</div>
          <p className="diff-desc">Cada estrutura é dimensionada especificamente para o seu espaço e necessidade.</p>
        </div>

        <div className="diff-card reveal" style={{ transitionDelay: '.15s' }}>
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
            </svg>
          </div>
          <div className="diff-title">Solda Profissional</div>
          <p className="diff-desc">Soldas reforçadas com acabamento impecável, garantindo resistência e longevidade.</p>
        </div>

        <div className="diff-card reveal" style={{ transitionDelay: '.2s' }}>
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="diff-title">Materiais de Qualidade</div>
          <p className="diff-desc">Utilizamos aço de alta qualidade e materiais certificados em todas as nossas obras.</p>
        </div>

        <div className="diff-card reveal" style={{ transitionDelay: '.25s' }}>
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
              <path d="M8 14h2M12 14h4M8 18h2"/>
            </svg>
          </div>
          <div className="diff-title">Prazo Garantido</div>
          <p className="diff-desc">Compromisso com os prazos acordados. Sua obra entregue no tempo combinado.</p>
        </div>

        <div className="diff-card reveal" style={{ transitionDelay: '.3s' }}>
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <div className="diff-title">Atendimento Rápido</div>
          <p className="diff-desc">Resposta ágil pelo WhatsApp e orçamento sem compromisso em pouco tempo.</p>
        </div>

        <div className="diff-card reveal" style={{ transitionDelay: '.35s' }}>
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="diff-title">Acabamento Premium</div>
          <p className="diff-desc">Atenção aos detalhes em cada etapa — do projeto à instalação final.</p>
        </div>

        <div className="diff-card reveal" style={{ transitionDelay: '.4s' }}>
          <div className="diff-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div className="diff-title">Segurança Estrutural</div>
          <p className="diff-desc">Todas as estruturas são dimensionadas com segurança para suportar as cargas previstas.</p>
        </div>

      </div>
    </section>
  );
};
