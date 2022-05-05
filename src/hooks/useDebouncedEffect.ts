import { useEffect } from 'react';

export const useDebouncedEffect = (callback: () => void, deps: any[], ms = 500) => {
  useEffect(() => {
    const timeout = setTimeout(callback, ms);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ms, ...deps]);
};
