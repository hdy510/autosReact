import styles from './Section5.module.css';
import clock3d from '../../resources/clock3d.jpg';
import energy3d from '../../resources/energy3d.jpg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useResponsive from '../../hooks/useResponsive';

function Section5({ activeIndex }) {
    const section5Ref = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const { isMobile, isTablet, isLaptop, isDesktop } = useResponsive();

    useEffect(() => {
        activeIndex === 7 ? activateSlide() : deactivateSlide();
    }, [activeIndex]);

    const activateSlide = () => {
        gsap.killTweensOf([
            section5Ref.current,
            card1Ref.current,
            card2Ref.current
        ]);

        gsap.timeline()
            .to(section5Ref.current, {
                opacity: 1,
                duration: 0.8
            }, 0)
            .from(card1Ref.current, {
                y: isMobile ? -20 : isTablet ? -20 : 20,
                duration: 0.5
            }, 0)
            .from(card2Ref.current, {
                y: isMobile ? -20 : isTablet ? -20 : 20,
                duration: 0.5
            }, "<20%")
      
    };

    const deactivateSlide = () => {
        gsap.killTweensOf([
            section5Ref.current,
            card1Ref.current,
            card2Ref.current
        ]);

        gsap.timeline()
            .to(section5Ref.current, {
                opacity: 0,
                duration: 0.8
            }, 0)
      
    };

    return (
        <div className={styles.section5} ref={section5Ref}>
        <div className={styles.center}>
          <div className={styles.title}>
            <h3>
              <span className={styles.small}>푸푸 오토스는 새로운 리테일 패러다임을 통해</span> 
              <span className={styles.big}>사회에 긍정적인 변화를 만들어갑니다</span>
            </h3>
          </div>
          <div className={styles.bottomBox}>
            <div className={styles.card} ref={card1Ref}>
              <img src={clock3d} alt="카드 시계 3d 아이콘" />
              <div className={styles.txtBox}>
                <p className={styles.subTitle}>시간의 가치를 돌려주는 혁신</p>
                <ul className={styles.description}>
                  <li>최적화된 무인 운영으로 점주, 소비자 모두 시간 절약</li>
                </ul>
              </div>
            </div>
            <div className={styles.card} ref={card2Ref}>
              <img src={energy3d} alt="카드 에너지 3d 아이콘" />
              <div className={styles.txtBox}>
                <p className={styles.subTitle}>무인 시스템을 통한 에너지 절약</p>
                <ul className={styles.description}>
                  <li>기존 오프라인 매장 대비 낮은 운영 비용과 필요한 만큼의 에너지 사용</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section5;
