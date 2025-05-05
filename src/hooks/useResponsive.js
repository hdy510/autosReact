import { useEffect, useState } from 'react';

function useResponsive() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 480;
  const isTablet = width > 480 && width <= 768;
  const isLaptop = width > 768 && width < 1280;
  const isDesktop = width >= 1280;

  return { isMobile, isTablet, isLaptop, isDesktop, width };
}

export default useResponsive;