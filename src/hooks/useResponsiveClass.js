import useResponsive from './useResponsive';

function useResponsiveClass(styles) {
  const { isMobile, isTablet, isLaptop } = useResponsive();

  if (isMobile) return styles.isMobile;
  if (isTablet) return styles.isTablet;
  if (isLaptop) return styles.isLaptop;
  return '';
}

export default useResponsiveClass;