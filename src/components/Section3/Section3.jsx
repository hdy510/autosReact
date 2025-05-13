import styles from './Section3.module.css';
import sandClock from '../../resources/sandClock.mp4';
import black from '../../resources/black.jpg';
import { use, useEffect, useRef } from 'react';
import gsap from 'gsap';

function Section3({ activeIndex }) {
    const videoRef = useRef(null);
    const txtBoxRef = useRef(null);

    useEffect(() => {
        activeIndex === 2 ? activateSlide() : deactivateSlide();
    }, [activeIndex]);

    const activateSlide = () => {
        gsap.killTweensOf([
            videoRef.current,
            txtBoxRef.current,
        ]);

        gsap.timeline()
            .to(videoRef.current, {
                opacity: 1,
                duration: 0.8
            }, 0)
            .to(txtBoxRef.current, {
                opacity: 1,
                duration: 0.8
            }, ">-50%");
    };

    const deactivateSlide = () => {
        gsap.killTweensOf([
            videoRef.current,
            txtBoxRef.current
        ]);

        gsap.timeline()
            .to(videoRef.current, {
                opacity: 0,
                duration: 0.8
            }, 0)
            .to(txtBoxRef.current, {
                opacity: 0,
                duration: 0.8
            }, 0);
            
    };

    return (
        <div className={styles.section3}>
            <video ref={videoRef} autoPlay loop muted playsInline poster={black}>
                <source src={sandClock} type="video/mp4" />
            </video>
            <div className={styles.txtBox} ref={txtBoxRef}>
                <p>푸푸 오토스의 무인 프랜차이즈 사업은</p>
                <p>당신의 삶의 가치를 높일</p>
                <p><span>소중한 시간</span>을 되찾아 드리겠습니다</p>
            </div>
        </div>
    );
}

export default Section3;
