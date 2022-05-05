import { Center, Spacer } from '@chakra-ui/react';

import { useColors } from '../hooks';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { MAX_WIDTH_PROPS, NAVBAR_HEIGHT } from './dimensions.const';
import { Logo } from './Logo';

export const NavBar = () => {
  const colors = useColors();

  const Bar = Center;
  const NavItemWrap = Center;

  return (
    <Bar
      position="fixed"
      top="0"
      width="100vw"
      minHeight={NAVBAR_HEIGHT}
      paddingX="5%"
      zIndex="sticky"
      borderBottomWidth="1px"
      borderBottomColor={colors.border}
      bgColor={colors.bg}
    >
      <NavItemWrap 
        height="100%"
        paddingY={4}
        {...MAX_WIDTH_PROPS}
      >
        <Logo height="100%" />
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
      </NavItemWrap>
    </Bar>
  )
};