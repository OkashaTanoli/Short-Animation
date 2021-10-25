import React from 'react';
import '../illustrationCSS/illustration.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import { motion } from 'framer-motion'

function Illustration() {
    let SameKeyFrame = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(100px)', opacity: 0 },
        { transform: 'translateY(0)' },
    ]
    const Circle1 = useWebAnimations({
        keyframes: [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-50px)', opacity: 0 },
            { transform: 'translateY(0)' },
        ],

        animationOptions: {
            duration: 2000,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    })
    const Circle2 = useWebAnimations({
        keyframes: SameKeyFrame,
        animationOptions: {
            duration: 2500,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    })
    const Circle3 = useWebAnimations({
        keyframes: SameKeyFrame,
        animationOptions: {
            duration: 3000,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    })
    const Circle4 = useWebAnimations({
        keyframes: SameKeyFrame,
        animationOptions: {
            duration: 1500,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    })
    const Circle5 = useWebAnimations({
        keyframes: SameKeyFrame,
        animationOptions: {
            duration: 2500,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    })
    const Circle6 = useWebAnimations({
        keyframes: [
            { transform: 'translate(0,0)' },
            { transform: 'translate(100px,30px)', opacity: 0 },
            { transform: 'translate(0,0)' },
        ],

        animationOptions: {
            duration: 3500,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    })
    const BackGround = useWebAnimations({
        keyframes: [
            { transform: 'translateX(0)' },
            { transform: 'translateX(90px)' },
            { transform: 'translateX(0)' },
            { transform: 'translateX(-90px)' },
            { transform: 'translateX(0)' },
        ],

        animationOptions: {
            duration: 5500,
            iterations: Infinity,
        }
    })
    const backgroundSett = useWebAnimations({
        keyframes: [
            { transform: 'translateY(150px)' },
            { transform: 'translateY(-100px)' },
            { transform: 'translateY(150px)' },
        ],

        animationOptions: {
            duration: 2500,
            iterations: Infinity,
            easing: 'ease-in-out'
        }
    })
    return (

        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1000 900" space="preserve">

            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-666.5838" y1="2052.0042" x2="-733.8839" y2="2716.2932" gradientTransform="matrix(1 0 0 -1 1184 2741)">
                <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                <stop offset="1" style={{ stopColor: "#EEEEEE" }} />
            </linearGradient>
            <path ref={BackGround.ref} class="st0" d="M354.2,493.2c10.4,38.2,108.9,90.2,190,32.1c37.7-27,26.9-47.6,49.4-86.9c13.4-23.4,36.5-45.4,35.9-72.8
	c-0.5-23.7-12.2-45.4-28.5-56.7c-36.8-25.3-96.2-31.3-129.7,38.8C437.9,417.8,327.5,394.7,354.2,493.2L354.2,493.2z"/>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="717.647" y1="402.8075" x2="973.7549" y2="402.8075">
                <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                <stop offset="1" style={{ stopColor: "#EEEEEE" }} />
            </linearGradient>
            <path ref={backgroundSett.ref} class="st1" d="M969.1,381.8l-32.9-5.4c-1.9-6.6-4.6-13-7.9-19l19.2-27.4c1.6-2.2,1.3-5.2-0.6-7.1l-21.7-21.6
	c-1.9-1.9-5-2.2-7.2-0.6l-27,19.4c-6.1-3.4-12.5-6-19.1-7.9l-5.7-32.8c-0.5-2.7-2.8-4.6-5.5-4.6h-30.6c-2.7,0-5.1,2-5.5,4.7
	l-5.3,32.6c-6.7,1.9-13.1,4.6-19.1,7.9l-26.9-19.2c-2.2-1.6-5.2-1.3-7.2,0.6l-21.6,21.6c-1.9,1.9-2.2,4.9-0.6,7.1l18.9,27.1
	c-3.4,6.1-6.1,12.6-8,19.3l-32.5,5.4c-2.7,0.4-4.7,2.8-4.7,5.5v30.6c0,2.7,1.9,5,4.6,5.5l32.5,5.8c1.9,6.7,4.6,13.2,8,19.3
	l-19.2,26.8c-1.6,2.2-1.3,5.2,0.6,7.2l21.6,21.7c1.9,1.9,4.9,2.2,7.1,0.6l27.1-19c6.1,3.3,12.5,6,19.2,7.9l5.4,32.6
	c0.4,2.7,2.8,4.6,5.5,4.6h30.6c2.7,0,5-1.9,5.5-4.6l5.8-32.8c6.7-2,13.1-4.6,19.1-8l27.3,19.2c2.2,1.6,5.2,1.3,7.1-0.6l21.6-21.7
	c1.9-1.9,2.2-5,0.6-7.2l-19.5-27c3.3-6,5.9-12.4,7.8-19l33-5.8c2.7-0.5,4.6-2.8,4.6-5.5v-30.6C973.8,384.5,971.8,382.2,969.1,381.8z
	 M845.7,441.8c-21.5,0-39-17.5-39-39s17.5-39,39-39s39,17.5,39,39S867.2,441.8,845.7,441.8z"/>
            <motion.path fill='#cfa202' animate={{ rotate: 360 }} transition={{ duration: 8, ease: 'linear', repeat: 'Infinity' }} id="sett4" d="M576.6,386.1l-55.2-9c-3.2-11.1-7.6-21.7-13.2-31.8l32.2-45.9c2.6-3.7,2.2-8.8-1-12l-36.3-36.3
	c-3.2-3.2-8.3-3.6-12-1l-45.2,32.5c-10.2-5.6-20.9-10.1-32-13.3l-9.6-54.9c-0.8-4.5-4.7-7.7-9.2-7.7h-51.3c-4.6,0-8.5,3.3-9.2,7.8
	l-8.9,54.6c-11.2,3.2-21.9,7.6-32.1,13.2l-45.1-32.2c-3.7-2.7-8.8-2.2-12,1l-36.3,36.3c-3.2,3.2-3.6,8.2-1,11.9l31.7,45.4
	c-5.6,10.2-10.1,21-13.4,32.3l-54.4,9.1c-4.5,0.7-7.8,4.6-7.8,9.2v51.3c0,4.5,3.2,8.4,7.7,9.2l54.4,9.6c3.3,11.2,7.8,22,13.4,32.3
	l-32.1,44.9c-2.7,3.7-2.2,8.8,1,12l36.3,36.3c3.2,3.2,8.2,3.6,12,1l45.4-31.8c10.2,5.6,21,10.1,32.1,13.3l9.1,54.7
	c0.7,4.5,4.6,7.8,9.2,7.8h51.3c4.5,0,8.4-3.2,9.2-7.7l9.8-55c11.2-3.3,21.9-7.8,32-13.4l45.8,32.1c3.7,2.6,8.8,2.2,12-1l36.3-36.3
	c3.2-3.2,3.6-8.3,1-12.1l-32.6-45.3c5.5-10.1,9.9-20.7,13.1-31.8l55.2-9.7c4.5-0.8,7.7-4.7,7.7-9.2v-51.3
	C584.4,390.8,581.1,386.9,576.6,386.1z M369.8,486.7c-36.1,0-65.3-29.2-65.3-65.3s29.2-65.3,65.3-65.3s65.3,29.2,65.3,65.3
	S405.9,486.7,369.8,486.7z"/>
            <motion.path fill='#cfa202' initial={{ x: -10, y: 30 }} animate={{ rotate: 360 }} transition={{ duration: 5, ease: 'linear', repeat: 'Infinity' }} id="sett3" d="M557.8,682.8l-20.7-3.4c-1.2-4.2-2.9-8.2-5-11.9l12.1-17.3c1-1.4,0.8-3.3-0.4-4.5l-13.6-13.6
	c-1.2-1.2-3.1-1.4-4.5-0.4l-17,12.2c-3.8-2.1-7.9-3.8-12-5l-3.6-20.7c-0.3-1.7-1.8-2.9-3.5-2.9h-19.3c-1.7,0-3.2,1.2-3.5,2.9
	l-3.4,20.5c-4.2,1.2-8.3,2.9-12.1,5l-16.9-12.1c-1.4-1-3.3-0.8-4.5,0.4l-13.6,13.6c-1.2,1.2-1.4,3.1-0.4,4.5l11.9,17.1
	c-2.1,3.8-3.8,7.9-5,12.1l-20.5,3.4c-1.7,0.3-2.9,1.7-2.9,3.5v19.3c0,1.7,1.2,3.2,2.9,3.5l20.5,3.6c1.2,4.2,2.9,8.3,5,12.1
	l-12.1,16.9c-1,1.4-0.8,3.3,0.4,4.5l13.6,13.7c1.2,1.2,3.1,1.4,4.5,0.4l17.1-12c3.8,2.1,7.9,3.8,12.1,5l3.4,20.6
	c0.3,1.7,1.7,2.9,3.5,2.9h19.3c1.7,0,3.2-1.2,3.5-2.9l3.7-20.7c4.2-1.2,8.2-2.9,12-5l17.2,12.1c1.4,1,3.3,0.8,4.5-0.4l13.6-13.7
	c1.2-1.2,1.4-3.1,0.4-4.5l-12.3-17c2.1-3.8,3.7-7.8,4.9-12l20.8-3.6c1.7-0.3,2.9-1.8,2.9-3.5v-19.3
	C560.8,684.6,559.5,683.1,557.8,682.8z M480.1,720.7c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6
	S493.6,720.7,480.1,720.7z"/>
            <motion.path fill='#cfa202' animate={{ rotate: 360 }} transition={{ duration: 6, ease: 'linear', repeat: 'Infinity' }} id="sett2" d="M820.6,244.7l-30.9-5.1c-1.8-6.2-4.3-12.2-7.4-17.8l18-25.7c1.5-2.1,1.2-4.9-0.6-6.7l-20.3-20.3
	c-1.8-1.8-4.7-2-6.8-0.5l-25.3,18.2c-5.7-3.1-11.7-5.6-18-7.5l-5.4-30.8c-0.4-2.5-2.6-4.3-5.2-4.3h-28.8c-2.6,0-4.7,1.9-5.2,4.4
	l-5,30.6c-6.3,1.8-12.3,4.3-18,7.4l-25.3-18c-2.1-1.5-4.9-1.3-6.7,0.6l-20.3,20.3c-1.8,1.8-2,4.6-0.6,6.7l17.8,25.4
	c-3.2,5.7-5.7,11.8-7.5,18.1l-30.5,5.1c-2.5,0.4-4.4,2.6-4.4,5.2v28.8c0,2.5,1.8,4.7,4.3,5.2l30.5,5.4c1.8,6.3,4.3,12.4,7.5,18.1
	l-18,25.2c-1.5,2.1-1.3,4.9,0.6,6.7l20.3,20.4c1.8,1.8,4.6,2,6.7,0.6l25.5-17.8c5.7,3.1,11.8,5.6,18,7.4l5.1,30.7
	c0.4,2.5,2.6,4.4,5.2,4.4h28.8c2.5,0,4.7-1.8,5.1-4.3l5.5-30.8c6.3-1.8,12.3-4.4,17.9-7.5l25.7,18c2.1,1.5,4.9,1.2,6.7-0.6
	l20.3-20.4c1.8-1.8,2-4.7,0.5-6.8L782.4,307c3.1-5.6,5.6-11.6,7.4-17.8l31-5.4c2.5-0.4,4.3-2.6,4.3-5.2v-28.8
	C825,247.3,823.2,245.1,820.6,244.7z M704.7,301.1c-20.2,0-36.6-16.4-36.6-36.6s16.4-36.6,36.6-36.6c20.2,0,36.6,16.4,36.6,36.6
	S724.9,301.1,704.7,301.1z"/>
            <motion.path fill='#cfa202' initial={{ x: 15 }} animate={{ rotate: 360 }} transition={{ duration: 7, ease: 'linear', repeat: 'Infinity' }} id="sett1" d="M892.5,553.2l-42.3-6.9c-2.5-8.5-5.9-16.6-10.1-24.3l24.7-35.2c2-2.8,1.7-6.7-0.8-9.2l-27.8-27.8
	c-2.5-2.5-6.4-2.8-9.2-0.7l-34.6,24.9c-7.8-4.3-16-7.7-24.5-10.2l-7.4-42.1c-0.6-3.4-3.6-5.9-7-5.9H714c-3.5,0-6.5,2.5-7.1,6
	l-6.8,41.9c-8.6,2.5-16.8,5.8-24.6,10.1L641,449c-2.9-2-6.7-1.7-9.2,0.8L604,477.6c-2.5,2.5-2.8,6.3-0.8,9.2l24.3,34.8
	c-4.3,7.8-7.8,16.1-10.3,24.7l-41.7,6.9c-3.4,0.6-6,3.6-6,7.1v39.3c0,3.5,2.5,6.4,5.9,7l41.7,7.4c2.5,8.6,5.9,16.9,10.3,24.7
	l-24.6,34.4c-2,2.8-1.7,6.7,0.8,9.2l27.8,27.8c2.5,2.5,6.3,2.8,9.2,0.8l34.8-24.4c7.8,4.3,16.1,7.7,24.6,10.2l7,41.9
	c0.6,3.4,3.5,6,7,6h39.3c3.5,0,6.4-2.5,7-5.9l7.5-42.1c8.6-2.5,16.8-6,24.5-10.3l35.1,24.6c2.8,2,6.7,1.7,9.2-0.8l27.8-27.8
	c2.5-2.5,2.8-6.4,0.7-9.2l-25-34.7c4.2-7.7,7.6-15.9,10.1-24.4l42.3-7.4c3.4-0.6,5.9-3.6,5.9-7v-39.3
	C898.5,556.7,895.9,553.7,892.5,553.2z M734,630.2c-27.6,0-50.1-22.4-50.1-50.1s22.4-50.1,50.1-50.1c27.6,0,50.1,22.4,50.1,50.1
	S761.7,630.2,734,630.2z"/>
            <ellipse ref={Circle1.ref} class="st2" cx="172.4" cy="618.3" rx="31.2" ry="38.1" />
            <ellipse ref={Circle2.ref} class="st2" cx="281.2" cy="751.2" rx="40" ry="35.9" />
            <circle ref={Circle3.ref} class="st2" cx="294.7" cy="147.6" r="13.5" />
            <circle ref={Circle4.ref} class="st2" cx="480.1" cy="144.2" r="13.5" />
            <circle ref={Circle5.ref} class="st2" cx="105" cy="255" r="23" />
            <circle ref={Circle6.ref} class="st2" cx="537.7" cy="215" r="23" />
        </svg>


    );
}

export default Illustration;
