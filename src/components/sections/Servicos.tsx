import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Servicos: React.FC = () => {
  useScrollReveal();

  return (
    <section className="servicos" id="servicos">
      <div className="section-label reveal">Nossos Serviços</div>
      <h2 className="section-title reveal">O Que <em>Fabricamos</em></h2>
      <p className="section-sub reveal">Soluções metálicas completas para residências, comércios e galpões — sempre com projeto sob medida.</p>
      
      <div className="services-grid">
        <div className="service-card reveal">
          <span className="service-num">01</span>
          <div className="service-name">Estrutura para Telhados</div>
          <p className="service-desc">Fabricamos e instalamos estruturas metálicas para telhados com aço reforçado, garantindo segurança estrutural e longa durabilidade.</p>
          <div className="service-tags">
            <span className="service-tag">Residencial</span>
            <span className="service-tag">Comercial</span>
            <span className="service-tag">Galpão</span>
          </div>
        </div>

        <div className="service-card reveal" style={{ transitionDelay: '.1s' }}>
          <span className="service-num">02</span>
          <div className="service-name">Telha Sanduíche</div>
          <p className="service-desc">Estrutura reforçada para telha sanduíche com excelente isolamento térmico e acústico. Conforto e eficiência em um só produto.</p>
          <div className="service-tags">
            <span className="service-tag">Isolamento Térmico</span>
            <span className="service-tag">Acústico</span>
          </div>
        </div>

        <div className="service-card reveal" style={{ transitionDelay: '.2s' }}>
          <span className="service-num">03</span>
          <div className="service-name">Mezanino Metálico</div>
          <p className="service-desc">Mezaninos personalizados para aproveitamento máximo do espaço vertical. Alta resistência, solda reforçada e dimensionamento seguro.</p>
          <div className="service-tags">
            <span className="service-tag">Depósito</span>
            <span className="service-tag">Escritório</span>
            <span className="service-tag">Varejo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
