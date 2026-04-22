import { useState, useEffect } from 'react';

export function useNavScroll(threshold: number = 60) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
