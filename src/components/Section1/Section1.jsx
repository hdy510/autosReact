import styles from './Section1.module.css';
import section1bg from '../../resources/section1bg.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useResponsive from '../../hooks/useResponsive';

function Section1({ activeIndex }) {
    const section1BgRef = useRef(null);
    const txtBoxRef = useRef(null);
    const bigARef = useRef(null);
    const { isMobile, isTablet, isLaptop, isDesktop } = useResponsive();

    useEffect(() => {
        activeIndex === 0 ? activateSlide() : deactivateSlide();
    }, [activeIndex]);

    const activateSlide = () => {
        gsap.killTweensOf([section1BgRef.current, txtBoxRef.current, bigARef.current]);

        gsap.timeline()
            .to(section1BgRef.current, { 
                scale: 1,
                borderRadius: '0%', 
                opacity: 1, 
                duration: 1,
            }, 0)
            .to(txtBoxRef.current, { 
                x: '0vw', 
                opacity: 1, 
                duration: 0.8 
            }, '<90%')
            .to(bigARef.current, { scale: 1, 
                color: '#fff', 
                duration: 0.8 
            }, 0);
    };
    const deactivateSlide = () => {
        gsap.killTweensOf([section1BgRef.current, txtBoxRef.current, bigARef.current]);

        gsap.timeline()
            .to(section1BgRef.current, { 
                scale: 0, 
                borderRadius: '20%', 
                opacity: 0, 
                duration: 1 
            }, 0)
            .to(txtBoxRef.current, { 
                x: '60vw', 
                opacity: 1, 
                duration: 0.8 
            }, 0)
            .to(bigARef.current, { 
                color: '#FF5722', 
                duration: 0.8 
            }, '<10%')
            .to(bigARef.current, { 
                opacity: 1,
                scale: 13, 
                duration: 0.8 
            }, '<90%');
    };

    const getResponsiveClass = () => {
        if (isMobile) return styles.isMobile;
        if (isTablet) return styles.isTablet;
        if (isLaptop) return styles.isLaptop;
        return '';
      };

    return (
        <div className={styles.section1}>
            <div className={styles.section1Bg} ref={section1BgRef}>
                <img src={section1bg} alt="section1 주황색 가게 배경 이미지" />
            </div>
            <div className={`${styles.txtBox} ${getResponsiveClass()}`} ref={txtBoxRef}>
                <div>
                    <h2 className={`${styles.title1} ${getResponsiveClass()}`}>
                        일 대신 일상을 <br />
                        부담 대신 여유를
                    </h2>
                </div>
                <h1 className={`${styles.title2} ${getResponsiveClass()}`}>
                    PUFFU{' '}
                    <span className={styles.bigA} ref={bigARef}>
                        A
                    </span>
                    UTOS
                </h1>
                <span className={`${styles.title3} ${getResponsiveClass()}`}>
                    푸푸오토스는 시간의 가치를 되찾고{(isMobile || isTablet) && <br/>} 더 자유롭고 의미있는 일상을 찾아 나서는{(isMobile || isTablet) && <br/>} 여러분을 응원합니다
                </span>
            </div>
        </div>
    );
}

export default Section1;
