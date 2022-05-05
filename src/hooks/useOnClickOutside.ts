import { useEffect } from 'react';

export const useOnClickOutside = (ref: any, onClick: () => void) => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      if (!ref.current?.contains(e.target)) {
        onClick();
      }
    };
    
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, onClick]);
};
