import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`text-[10px] tracking-[5px] uppercase text-blue-primary mb-5 flex items-center gap-3 ${className}`}>
      <span className="w-7 h-px bg-blue-primary inline-block"></span>
      {children}
    </div>
  );
}
