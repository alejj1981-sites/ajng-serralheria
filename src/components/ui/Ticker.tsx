
interface TickerProps {
  items: string[];
  reverse?: boolean;
}

export function Ticker({ items, reverse = false }: TickerProps) {
  const TickerContent = () => (
    <>
      {items.map((item, i) => (
        <span key={i}>
          <span className="ticker-item">{item}</span>
          <span className="ticker-dot">{reverse ? '◆' : '✦'}</span>
        </span>
      ))}
    </>
  );

  return (
    <div className={`ticker-wrap ${reverse ? 'reverse' : ''}`}>
      <div className={`ticker-track ${reverse ? 'ticker-reverse' : ''}`}>
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
