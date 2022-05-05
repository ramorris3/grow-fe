import { Box, Center, Circle, keyframes } from '@chakra-ui/react';
import { useColors } from '../../hooks';

export const ArticlePlaceholder = () => {
  const { placeholderPrimary, placeholderSecondary } = useColors();

  const pulse = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  `;

  return (
    <Center
      flexDir="row"
      gap={8}
      width="100%"
      minHeight="64px"
      padding={4}
      borderRadius="md"
      bgGradient={`linear(270deg, ${placeholderPrimary}, ${placeholderSecondary})`}
      bgSize="200% 200%"
      bgRepeat="repeat"
      animation={`${pulse} infinite 3s linear`}
    >
      <Circle 
        bgColor={placeholderPrimary} 
        size="48px"
      />
      <Box 
        flex="3"
        bgColor={placeholderPrimary} 
        height="48px"
        borderRadius="sm"
      />
      <Box 
        flex="1"
        bgColor={placeholderPrimary} 
        height="48px"
        borderRadius="sm"
      />
    </Center>
  );
}