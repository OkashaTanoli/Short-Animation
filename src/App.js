import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import Illustration from './components/illustration/illustration';
import Github from './images/github.png'
import { motion } from 'framer-motion'


function App() {
	const { ref } = useWebAnimations({
		keyframes: [
			{ boxShadow: '0 0 30px blue' },
			{ boxShadow: '0 0 30px red' },
			{ boxShadow: '0 0 30px gray' },
			{ boxShadow: '0 0 30px green' },
			{ boxShadow: '0 0 30px blue' },
		],

		animationOptions: {
			duration: 10000, // Run for 1000ms
			iterations: Infinity, // Repeat once
			// easing: 'ease-in-out'
		}
	})
	return (
		<div className="App">
			<div className='header'>
				Tiny Short Animation
			</div>
			<div className='appContainer'>
				<div className='text'>
					<h1 className='textHead'>Project 4b is completed using <span className='properNoun'>reactJS</span>, <span className='properNoun'>framerMotion</span> and <span className='properNoun'>useWebAnimation</span> </h1>
					<a href='https://github.com/OkashaTanoli/Short-Animation' rel="noreferrer" style={{ textDecoration: 'none' }} target='_blank'><button ref={ref} className='githubBtn'>View On Github<img src={Github} style={{ marginLeft: '10px' }} width='50px' alt='img' /></button></a>
				</div>
				<div>
					<Illustration />
				</div>
			</div>
			<motion.circle
				cx={500}
				animate={{ cx: [null, 100, 200] }}
				transition={{ duration: 3, times: [0, 0.2, 1] }}
			/>
		</div>
	);
}

export default App;
