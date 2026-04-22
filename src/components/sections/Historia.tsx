import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Historia: React.FC = () => {
  useScrollReveal();

  return (
    <section className="historia">
      <div className="historia-inner">
        <div className="reveal-left">
          <div className="section-label">Nossa História</div>
          <h2 className="section-title">
            Mais de <em>10 Anos</em><br />de Ferro e Trabalho
          </h2>
          <div className="historia-quote">
            <p>"Transformamos ferro em estruturas seguras e duráveis — com qualidade, compromisso e respeito em cada serviço."</p>
          </div>
          <p className="historia-text">
            Tudo começou com um sonho e muita vontade de trabalhar. A AJNG nasceu há mais de 10 anos, com dedicação, esforço e o objetivo de fazer sempre um trabalho bem feito.
          </p>
          <p className="historia-text">
            Com o tempo, conquistamos experiência, confiança e a satisfação de cada cliente. Hoje seguimos firmes, entregando qualidade e compromisso em cada estrutura instalada.
          </p>
        </div>

        <div className="reveal-right">
          <div className="historia-visual">
            <div className="historia-big-num">10</div>
            <div className="historia-card">
              <div className="historia-card-title">Linha do Tempo</div>
              
              <div className="timeline-item">
                <div className="timeline-year">Início</div>
                <div className="timeline-desc">Fundação da AJNG com foco em estruturas metálicas residenciais no Jardim Shangrila.</div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">Crescimento</div>
                <div className="timeline-desc">Expansão para atendimento comercial e industrial, incluindo galpões e coberturas.</div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">Hoje</div>
                <div className="timeline-desc">Referência regional em estruturas metálicas com mais de 10 anos de experiência e centenas de obras realizadas.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
