import { useMediaQuery } from 'react-responsive';

export const DESKTOP_MIN_WIDTH = 992;
export const TABLET_MIN_WIDTH = 768;

export function useResponsive(){
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH });
  const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH, maxWidth: DESKTOP_MIN_WIDTH - 1 });
  const isMobile = useMediaQuery({ maxWidth: TABLET_MIN_WIDTH - 1 });

  return {
    isDesktop, isPortrait, isTablet, isMobile
  }
}