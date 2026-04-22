import { useRef } from 'react';
import { useCursor } from './hooks/useCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';
import { Ticker } from './components/ui/Ticker';
import SchemaOrg from './components/seo/SchemaOrg';

import { Hero } from './components/sections/Hero';
import { Servicos } from './components/sections/Servicos';
import { TelhaSanduiche } from './components/sections/TelhaSanduiche';
import { Mezanino } from './components/sections/Mezanino';
import { Historia } from './components/sections/Historia';
import { Diferenciais } from './components/sections/Diferenciais';
import { Galeria } from './components/sections/Galeria';
import { AreaAtendimento } from './components/sections/AreaAtendimento';
import { CtaFinal } from './components/sections/CtaFinal';

function App() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useCursor(dotRef, ringRef);

  return (
    <>
      <SchemaOrg />
      <Navbar />
      <main>
      <Hero />
      <Ticker items={[
        'Estrutura Metálica', 
        'Telhados', 
        'Telha Sanduíche', 
        'Mezanino Metálico', 
        'Galpões', 
        'Garagens', 
        'Coberturas', 
        '10 Anos de Experiência'
      ]} />
      <Servicos />
      <TelhaSanduiche />
      <Mezanino />
      <Historia />
      <Ticker reverse items={[
        'Qualidade Garantida',
        'Projetos Sob Medida',
        'Solda Profissional',
        'Atendimento Rápido',
        'Prazo Garantido',
        'Materiais Premium',
        'Jardim Shangrila'
      ]} />
      <Diferenciais />
      <Galeria />
      <AreaAtendimento />
      <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      
      {/* Custom Cursor */}
      <div id="cursor" ref={dotRef}></div>
      <div id="cursorRing" ref={ringRef}></div>
    </>
  );
}

export default App;
