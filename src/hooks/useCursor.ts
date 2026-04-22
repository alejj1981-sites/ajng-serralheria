import { useEffect } from 'react';

export function useCursor(
  dotRef: React.RefObject<HTMLDivElement | null>,
  ringRef: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
      
      if (ringRef.current) {
        if (isHoverable) {
          ringRef.current.style.width = '52px';
          ringRef.current.style.height = '52px';
          ringRef.current.style.opacity = '0.5';
        } else {
          ringRef.current.style.width = '34px';
          ringRef.current.style.height = '34px';
          ringRef.current.style.opacity = '1';
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
      
      if (ringRef.current) {
        ringRef.current.style.width = '';
        ringRef.current.style.height = '';
        ringRef.current.style.opacity = '';
      }
    };
  }, [dotRef, ringRef]);
}
