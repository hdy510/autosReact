import styles from './Header.module.css';
import logo from '../../resources/logo.png';
import logoOrange from '../../resources/logoOrange.png';

function Header({ activeIndex, swiperInstance }) {
  const isActive = (start, end) => activeIndex >= start && activeIndex <= end;

  const handleNavClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };
  const getNavClass = (start, end) => {
    return `
      ${styles.navList}
      ${isActive(start, end) ? styles.active : ''}
      ${(activeIndex === 1 || activeIndex === 7) ? styles.brown : ''}
    `;
  };
  
  return (
    <header className={styles.header}>
      <a href='/' rel='noopener noreferrer' className={styles.logo}>
        <img src={logo} alt="puffu autos logo" />
        <img className={`${styles.logoOrange} ${activeIndex === 1 || activeIndex === 7 ? styles.active : ''}`} src={logoOrange} alt="puffu autos logo" />
      </a>
      <nav className={`${styles.nav}`}>
        <ul>
          <li className={getNavClass(1, 2)} onClick={() => handleNavClick(1)}>How We Think</li>
          <li className={getNavClass(3, 6)} onClick={() => handleNavClick(3)}>Strategy</li>
          <li className={getNavClass(7, 7)} onClick={() => handleNavClick(7)}>Society</li>
          <li className={getNavClass(8, 9)} onClick={() => handleNavClick(9)}>Contact</li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;