import styles from './Section6.module.css';
import people from '../../resources/people.png';
import openQuotes from '../../resources/openQuotes.png';
import closeQuotes from '../../resources/closeQuotes.png';
import phoneIcon from '../../resources/phoneIcon.png';
import marketIcon from '../../resources/marketIcon.png';
import arrowTop from '../../resources/arrowTop.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Section6({ activeIndex, peopleOpacity, swiperContainerRef, swiperInstance }) {
    const firstBoxRef = useRef(null);
    const secondBoxRef = useRef(null);
    const linkBtnRef = useRef(null);
    const topBtnRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        activeIndex === 8 ? activateFristSlide() : deactivateFristSlide();
        activeIndex === 9 ? activateSecondSlide() : deactivateSecondSlide();
    }, [activeIndex]);

    const activateFristSlide = () => {
        gsap.killTweensOf([
            firstBoxRef.current,
        ]);

        gsap.timeline()
            .to(firstBoxRef.current, {
                opacity: 1,
                duration: 0.8
            }, 0)
    };
    const deactivateFristSlide = () => {
        gsap.killTweensOf([
            firstBoxRef.current,
        ]);

        gsap.timeline()
            .to(firstBoxRef.current, {
                opacity: 0,
                duration: 0.8
            }, 0)
    };

    const activateSecondSlide = () => {
        gsap.killTweensOf([
            secondBoxRef.current,
            linkBtnRef.current,
            topBtnRef.current,
            footerRef.current,
        ]);
        gsap.timeline()
            .to(secondBoxRef.current, {
                opacity: 1,
                duration: 0.8
            }, 0)
            .to(linkBtnRef.current, {
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.8
            }, 0)
            .to(topBtnRef.current, {
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.8
            }, 0)
            .to(footerRef.current, {
                opacity: 1,
                duration: 0.8
            }, 0)
    };
    const deactivateSecondSlide = () => {
        gsap.killTweensOf([
            secondBoxRef.current,
            linkBtnRef.current,
            topBtnRef.current,
            footerRef.current,
        ]);
        gsap.timeline()
            .to(secondBoxRef.current, {
                opacity: 0,
                duration: 0.8
            }, 0)
            .to(linkBtnRef.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.8
            }, 0)
            .to(topBtnRef.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.8
            }, 0)
            .to(footerRef.current, {
                opacity: 0,
                duration: 0.8
            }, 0)
    };

    // 버튼 위에서 스크롤 시 wheel 이벤트 발생
    const handleWheel = (e) => {
        const wheelEvent = new WheelEvent('wheel', {
          deltaY: e.deltaY,
          bubbles: true,
          cancelable: true,
        });
        if (swiperContainerRef?.current) {
          swiperContainerRef.current.dispatchEvent(wheelEvent);
        }
    };

    // top 버튼 클릭 시
    const handleTopBtnClick = () => {
        if (swiperInstance) {
          swiperInstance.slideTo(0);
        }
      };

    return (
        <>
            <div className={styles.section6}>
                <div className={styles.bgBox} style={{ opacity: peopleOpacity }}>
                    <img src={people} alt="노을을 보며 앉아있는 사람들 이미지" />
                </div>
                <div className={styles.firstBox} ref={firstBoxRef}>
                    <div className={styles.txtBox}>
                        <div className={styles.completeBox}>
                            <img className={styles.quote} src={openQuotes} alt="여는 쌍따옴표 이미지" />
                            <span className={styles.complete}>완전한</span>
                            <img className={styles.quote} src={closeQuotes} alt="닫는 쌍따옴표 이미지" />
                        </div>
                        <div>
                            <span className={styles.small}>무인 리테일로</span>
                        </div>
                    </div>
                    <p>여러분의 소중한 것을 되찾아 드리겠습니다</p>
                </div>
                <div className={styles.secondBox} ref={secondBoxRef}>
                    <div className={styles.topBox}>
                        <div className={styles.txtBox}>
                            <p className={styles.small}>새로운 스마트 리테일의 시대, </p>
                            <p className={styles.small}>
                                <span className={styles.big}>푸푸 오토스</span> 와 함께 시작하세요
                            </p>
                        </div>
                        <div className={styles.contactBox}>
                            <p>CONTACT</p>
                            <div className={styles.phoneNumber}>
                                <img src={phoneIcon} alt="전화 아이콘" />
                                <span>042-000-0000</span>
                            </div>
                        </div>
                    </div>
                </div>
    
                <footer ref={footerRef}>
                    <div className={styles.leftBox}>
                        <ul className={styles.depth1ul}>
                            <li className={styles.depth1li}>
                                <ul className={styles.depth2ul}>
                                    <li className={styles.key}>CEO</li>
                                    <li className={styles.value}>홍길동</li>
                                </ul>
                            </li>
                            <li className={styles.depth1li}>
                                <ul className={styles.depth2ul}>
                                    <li className={styles.key}>BUSINESS NUMBER</li>
                                    <li className={styles.value}>000-00-00000 | 대표: OOO</li>
                                </ul>
                            </li>
                            <li className={styles.depth1li}>
                                <ul className={styles.depth2ul}>
                                    <li className={styles.key}>ADDRESS</li>
                                    <li className={styles.value}>35372 대전 서구 관저중로95번길 74 4층</li>
                                </ul>
                            </li>
                            <li className={styles.depth1li}>
                                <ul className={styles.depth2ul}>
                                    <li className={styles.key}>TEL</li>
                                    <li className={styles.value}>042-000-0000</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.rightBox}>
                        <p>COPYRIGHT. PUFFU AUTOS. ALL RIGHTS RESERVED.</p>
                    </div>
                </footer>
            </div>

            <a href='https://brand.puffu.co.kr/' 
                target='_blank' 
                rel='noopener noreferrer'
                className={styles.linkBtn} 
                ref={linkBtnRef} 
                onWheel={handleWheel}
            >
                <img src={marketIcon} alt="가게 아이콘" />
                <span>가맹문의 페이지 이동</span>
            </a>

            <div className={styles.topBtn} ref={topBtnRef} onWheel={handleWheel} onClick={handleTopBtnClick}>
                <img src={arrowTop} alt="top 버튼 아이콘" />
            </div>
        </>
    );
}

export default Section6;
