import styles from './Section2.module.css';
import lightbulb from '../../resources/lightblub.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Section2({ activeIndex }) {
    const txtBoxRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        activeIndex === 1 ? activateSlide() : deactivateSlide();
    }, [activeIndex]);

    const activateSlide = () => {
        gsap.killTweensOf([txtBoxRef.current, titleRef.current, descriptionRef.current]);

        gsap.set(titleRef.current, { opacity: 1, y: 0});
        gsap.set(descriptionRef.current, { opacity: 1, y: 0});

        gsap.timeline()
            .to(txtBoxRef.current, {
                opacity: 1,
                duration: 0.8
            }, 0)
            .from(titleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.5
            }, "<50%")
            .from(descriptionRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.5
            }, "<50%")
    
    };

    const deactivateSlide = () => {
        gsap.killTweensOf([txtBoxRef.current, titleRef.current, descriptionRef.current]);

        gsap.timeline()
            .to(txtBoxRef.current, {
                opacity: 0,
                duration: 0.8
            }, 0)
            
    };

    return (
        <div className={styles.section2}>
            <div className={styles.txtBox} ref={txtBoxRef}> 
                <div className={styles.section2Title} ref={titleRef}>
                    <h3>How We Think</h3>
                    <img className={styles.section2Bulb} src={lightbulb} alt="전구 3d 아이콘" />
                </div>
                <div className={styles.section2Description} ref={descriptionRef}>
                    <p><span>기술</span>은 단순히 효율적인 것을 넘어</p>
                    <p><span>삶의 가치</span>를 높이는 도구가 되어야 한다고 생각합니다</p>
                </div>
            </div>
        </div>
    );
}

export default Section2;
