import styles from './Section7.module.css';
import section1bg from '../../resources/section1bg.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Section7({ activeIndex }) {
    // const section1BgRef = useRef(null);
    // const txtBoxRef = useRef(null);
    // const bigARef = useRef(null);

    // useEffect(() => {
    //     activeIndex === 0 ? activateFirstSlide() : deactivateFirstSlide();
    // }, [activeIndex]);

    // const activateFirstSlide = () => {
    //     gsap.killTweensOf([section1BgRef.current, txtBoxRef.current, bigARef.current]);

    //     gsap.timeline()
    //         .to(section1BgRef.current, { 
    //             scale: 1,
    //             borderRadius: '0%', 
    //             opacity: 1, 
    //             duration: 1,
    //         }, 0)
    //         .to(txtBoxRef.current, { 
    //             x: '0vw', 
    //             opacity: 1, 
    //             duration: 0.8 
    //         }, '<90%')
    //         .to(bigARef.current, { scale: 1, 
    //             color: '#fff', 
    //             duration: 0.8 
    //         }, 0);
    // };
    // const deactivateFirstSlide = () => {
    //     gsap.killTweensOf([section1BgRef.current, txtBoxRef.current, bigARef.current]);

    //     gsap.timeline()
    //         .to(section1BgRef.current, { 
    //             scale: 0, 
    //             borderRadius: '20%', 
    //             opacity: 0, 
    //             duration: 1 
    //         }, 0)
    //         .to(txtBoxRef.current, { 
    //             x: '60vw', 
    //             opacity: 1, 
    //             duration: 0.8 
    //         }, 0)
    //         .to(bigARef.current, { 
    //             color: '#FF5722', 
    //             duration: 0.8 
    //         }, '<10%')
    //         .to(bigARef.current, { 
    //             opacity: 1,
    //             scale: 13, 
    //             duration: 0.8 
    //         }, '<90%');
    // };

    return (
        <></>
    );
}

export default Section7;
