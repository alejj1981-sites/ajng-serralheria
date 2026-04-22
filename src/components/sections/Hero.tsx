import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import teamPhoto from '../../assets/images/hero-team.png';

export const Hero: React.FC = () => {
  useScrollReveal();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-label reveal">Serralheria Profissional &nbsp;·&nbsp; Jardim Shangrila</div>

        <h1 className="hero-title reveal" style={{ transitionDelay: '.12s' }}>
          Estruturas <em>Metálicas</em> de Alta Resistência
        </h1>

        <p className="hero-sub reveal" style={{ transitionDelay: '.24s' }}>
          Mais de <strong style={{ color: 'var(--white)', fontWeight: 600 }}>10 anos</strong> fabricando e instalando telhados, telhas sanduíche e mezaninos com segurança, durabilidade e acabamento profissional.
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '.36s' }}>
          <a 
            href="https://wa.me/5511940885781?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" 
            className="btn-primary"
            aria-label="Falar com a AJNG Serralheria pelo WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </a>
          <a href="#servicos" className="btn-outline">Ver Serviços</a>
        </div>

        <div className="hero-stats reveal" style={{ transitionDelay: '.48s' }}>
          <div>
            <div className="stat-num">10+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Projetos Sob Medida</div>
          </div>
          <div>
            <div className="stat-num">Aço</div>
            <div className="stat-label">Alta Qualidade</div>
          </div>
        </div>
      </div>

      <div className="hero-team">
        <img
          src={teamPhoto}
          alt="Equipe AJNG Serralheria Steel Frame trabalhando"
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>

      <div className="hero-scroll reveal" style={{ transitionDelay: '.6s' }}>
        <div className="hero-scroll-text">Role para baixo</div>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
};
