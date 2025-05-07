import styles from './Header.module.css';
import logo from '../../resources/logo.png'; // Adjust the path as necessary

function Header({ activeIndex, swiperInstance }) {
  const isActive = (start, end) => activeIndex >= start && activeIndex <= end;

  const handleNavClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };
  
  return (
    <header className={styles.header}>
      <a href='/' rel='noopener noreferrer' className={`${styles.logo}`}>
        <img src={logo} alt="puffu autos logo" />
      </a>
      <nav className={`${styles.nav}`}>
        <ul>
          <li className={`${styles.navList} ${isActive(1, 2) ? styles.active : ''}`}
            onClick={() => handleNavClick(1)}
          >How We Think</li>
          <li className={`${styles.navList} ${isActive(3, 6) ? styles.active : ''}`}
            onClick={() => handleNavClick(3)}
          >Strategy</li>
          <li className={`${styles.navList} ${isActive(7, 7) ? styles.active : ''}`}
            onClick={() => handleNavClick(7)}
          >Society</li>
          <li className={`${styles.navList} ${isActive(8, 9) ? styles.active : ''}`}
            onClick={() => handleNavClick(8)}
          >Contact</li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;