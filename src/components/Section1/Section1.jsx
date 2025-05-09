import styles from './Section1.module.css';
import section1bg from '../../resources/section1bg.png';
import cloud from '../../resources/cloud.png';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import useResponsive from '../../hooks/useResponsive';

function Section1({ activeIndex }) {
    const section1BgRef = useRef(null);
    const txtBoxRef = useRef(null);
    const bigARef = useRef(null);
    const cloudBoxRef = useRef(null);
    const { isMobile, isTablet, isLaptop, isDesktop } = useResponsive();
    const [isBigAVisible, setIsBigAVisible] = useState(true);

    useEffect(() => {
        activeIndex === 0 ? activateSlide() : deactivateSlide();

        setIsBigAVisible(activeIndex <= 1);
    }, [activeIndex]);

     useEffect(() => {
        if (!bigARef.current || !cloudBoxRef.current) return;

        if (isBigAVisible) {
            gsap.to([bigARef.current, cloudBoxRef.current], {
                opacity: 1,
                duration: 0.5,
                onStart: () => {
                    gsap.set([bigARef.current, cloudBoxRef.current], { visibility: 'visible' });
                },
            });
        } else {
            gsap.to([bigARef.current, cloudBoxRef.current], {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    gsap.set([bigARef.current, cloudBoxRef.current], { visibility: 'hidden' });
                },
            });
        }
    }, [isBigAVisible]);

    const activateSlide = () => {
        gsap.killTweensOf([section1BgRef.current, txtBoxRef.current, bigARef.current, cloudBoxRef.current]);

        gsap.timeline()
            .to(section1BgRef.current, { 
                scale: 1,
                borderRadius: '0%', 
                opacity: 1, 
                duration: 1,
            }, 0)
            .to(txtBoxRef.current, { 
                opacity: 1, 
                duration: 0.8 
            }, '<90%')
            .to(bigARef.current, { 
                scale: 1, 
                y: isMobile && '0',
                x: '0', 
                color: '#fff', 
                duration: 0.8 
            }, 0)
            .to(cloudBoxRef.current, {
                opacity: 0,
                duration: 0.8
            }, 0);
    };
    const deactivateSlide = () => {
        gsap.killTweensOf([section1BgRef.current, txtBoxRef.current, bigARef.current, cloudBoxRef.current]);

        gsap.timeline()
            .to(section1BgRef.current, { 
                scale: 0, 
                borderRadius: '20%', 
                opacity: 0, 
                duration: 1 
            }, 0)
            .to(txtBoxRef.current, { 
                opacity: 1, 
                duration: 0.8 
            }, 0)
            .to(bigARef.current, { 
                x: isMobile ? '30vw' : isTablet ? '40vw' : isLaptop ? '35vw' : isDesktop ? '55vw' : '60vw',
                color: '#FF5722', 
                duration: 0.8 
            }, '<10%')
            .to(bigARef.current, { 
                opacity: 1,
                y: isMobile ? '10vh' : isTablet ? '8vh' : isLaptop ? '6vh' : isDesktop ? '5vh' : '0',
                scale: isMobile ? 10 : isTablet ? 11 : isLaptop ? 11 : isDesktop ? 10 : 13,
                duration: 0.8
            }, '<90%')
            .to(cloudBoxRef.current, {
                opacity: 1,
                duration: 0.8
            }, "<");
    };



    return (
        <div className={styles.section1}>
            <div className={styles.section1Bg} ref={section1BgRef}>
                <img src={section1bg} alt="section1 주황색 가게 배경 이미지" />
            </div>
            <div className={`${styles.txtBox}`} ref={txtBoxRef}>
                <div>
                    <h1 className={`${styles.title1}`}>
                        일 대신 일상을 <br />
                        부담 대신 여유를
                    </h1>
                </div>
                <div className={`${styles.title2}`}>
                    PUFFU{' '}
                    <div className={styles.bigA} ref={bigARef}>
                        A
                        <div className={styles.cloudBox} ref={cloudBoxRef}>
                            <img className={`${styles.cloud} ${styles.index0}`} src={cloud} alt="구름 3d 아이콘" />
                            <img className={`${styles.cloud} ${styles.index1}`} src={cloud} alt="구름 3d 아이콘" />
                        </div>
                    </div>
                    UTOS
                </div>
                <h2 className={`${styles.title3}`}>
                    푸푸오토스는 시간의 가치를 되찾고{(isMobile || isTablet) && <br/>} 더 자유롭고 의미있는 일상을 찾아 나서는{(isMobile || isTablet) && <br/>} 여러분을 응원합니다
                </h2>
            </div>
            
        </div>
    );
}

export default Section1;