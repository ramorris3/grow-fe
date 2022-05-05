import { Center, CenterProps, Icon, Image, Link, useColorModeValue } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

import { GrowLogo } from './GrowLogo.svg';

export const Logo = (props: CenterProps) => {
  const timesIconGreen = useColorModeValue('green.700', 'green.400');

  return (
    <Center 
      gap={4}
      height="100%"
      {...props}
    >
      <Link href="https://growtherapy.com">
        <Icon 
          as={GrowLogo}
          height="100%"
        />
      </Link>
      <Icon 
        as={FaTimes}
        color={timesIconGreen}
        height="100%"
      />
      <Link href="https://en.wikipedia.org">
        <Image
          src="/WikipediaLogo.png"
          alt="Wikipedia Logo"
          height="100%"
          maxHeight="45px"
        />
      </Link>
    </Center>
  );
}