import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  const baseClasses = "relative overflow-hidden inline-block font-condensed uppercase transition-all duration-300 z-10 group";
  
  const variants = {
    primary: "bg-blue-primary text-white px-10 py-4 text-[14px] font-bold tracking-[3px] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(0,104,181,0.35)]",
    outline: "border border-[rgba(0,104,181,0.2)] text-site-dim px-8 py-4 text-[13px] font-medium tracking-[2px] hover:border-blue-primary hover:text-blue-primary"
  };

  const primaryEffect = variant === 'primary' ? (
    <span className="absolute inset-0 bg-black/10 -translate-x-[101%] transition-transform duration-[350ms] ease-out group-hover:translate-x-0 -z-10" />
  ) : null;

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {primaryEffect}
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {primaryEffect}
      {children}
    </button>
  );
}
