import { useMemo } from 'react';

import { useColorMode } from '@chakra-ui/react';

export const useColors = () => {
  const { colorMode } = useColorMode();

  return useMemo(() => {
    const isLight = colorMode === 'light';

    return {
      bg: isLight ? 'white' : 'gray.800',
      border: isLight ? 'gray.100' : 'gray.700',
      defaultText: isLight ? 'black' : 'white',
      greenText: isLight ? 'green.700' : 'green.400',
      placeholderPrimary: isLight ? 'blackAlpha.50' : 'whiteAlpha.50',
      placeholderSecondary: isLight ? 'blackAlpha.300' : 'whiteAlpha.300',
    }
  }, [colorMode]);
};