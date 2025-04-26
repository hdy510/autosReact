import styles from './Section4.module.css';
import spotlight from '../../resources/spotlight.jpg';
import market from '../../resources/market.png';
import strategy1 from '../../resources/STRATEGY1.png';
import strategy2 from '../../resources/STRATEGY2.png';
import strategy3 from '../../resources/STRATEGY3.png';
import strategy4 from '../../resources/STRATEGY4.png';
import appScreen from '../../resources/appScreen.png';
import usingPhone from '../../resources/usingPhone.png';
import highquality from '../../resources/highquality.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Section4({ activeIndex }) {

    return (
        <div className={styles.section4}>
            <div className={styles.spotlightBg}>
                <img src={spotlight} alt="스포트라이트 배경이미지" width="100%" />
            </div>
            <div className={`${styles.strategyBox} ${styles.index0}`}>
            <div className={styles.imgBox}>
                <img src={market} alt="매장 외관 이미지" />
            </div>
            <div className={styles.txtBox}>
                <div className={styles.indexBox}>
                <img src={strategy1} alt="전략1" /> 
                <div className={styles.bar}></div>
                </div>
                <div className={styles.title}>
                <p><span>24시간</span> 오픈된 <span>매장</span>과</p>
                <p><span>24시간</span> 대기중인 <span>본사</span></p>
                <p>완전한 무인매장</p>
                </div>
                <div className={styles.description}>
                <p>매장만 24시간 열려있는게 아닌 <span>24시간 본사 관제</span>를 통해 
                    실시간으로 문제를 책임지고 해결해드립니다</p>
                </div>
            </div>
            </div>

        <div className={`${styles.strategyBox} ${styles.index1}`}>
            <div className={styles.imgBox}>
                <img src={appScreen} alt="앱 화면 이미지" />
                <img src={appScreen} alt="앱 화면 이미지" />
            </div>
            <div className={styles.txtBox}>
                <div className={styles.indexBox}>
                    <img src={strategy2} alt="전략2" />
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.title}>
                    <p><span>스마트 IoT 시스템</span>을 활용한</p>
                    <p>실시간 매장 관리 체계 구축</p>
                    <p>완전한 무인매장</p>
                </div>
                <div className={styles.description}>
                    <p>재고관리, 판매 데이터 분석, 매장 유지보수까지
                    무인 운영 최적화를 위한 IoT 기반 시스템으로 관리합니다</p>
                </div>
            </div>
        </div>

        <div className={`${styles.strategyBox} ${styles.index2}`}>
            <div className={styles.imgBox}>
                <img src={usingPhone} alt="핸드폰 사용 이미지" />
            </div>
            <div className={styles.txtBox}>
                <div className={styles.indexBox}>
                    <img src={strategy3} alt="전략3" />
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.title}>
                    <p>키오스크 및 모바일을 통한</p>
                    <p>편리한 <span>셀프 결제 시스템</span></p>
                </div>
                <div className={styles.description}>
                    <p>쉽고 간편한 키오스크와 모바일 주문 및 결제 기능을 통해
                        소비자가 더 편하고 자유롭게 쇼핑할 수 있는 환경을 제공합니다</p>
                </div>
            </div>
        </div>

        <div className={`${styles.strategyBox} ${styles.index3}`}>
            <div className={styles.imgBox}>
                <img src={highquality} alt="핸드폰 사용 이미지" />
            </div>
            <div className={styles.txtBox}>
                <div className={styles.indexBox}>
                    <img src={strategy4} alt="전략4" />
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.title}>
                    <p>믿을만한 <span>고품질 제품</span></p>
                    <p>지속적인 제품 라인업 <span>업데이트</span></p>
                </div>
                <div className={styles.description}>
                    <p>모든 제품은 정식 유통 경로를 통해 공급, 철저한 품질 검증을 거쳐 입점하고
                    최신 트렌드에 맞춘 제품 라인업을 지속적으로 업데이트합니다</p>
                </div>
            </div>
        </div>
    </div>
        
    );
}

export default Section4;
