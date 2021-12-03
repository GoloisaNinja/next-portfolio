import React from 'react';
//import cvPDF from "../../utils/collins_dev_cv.pdf";
import smoothscroll from 'smoothscroll-polyfill';
import styles from './hero.module.scss';

function Hero() {
	const scrollToProjects = () => {
		smoothscroll.polyfill();
		const target = document.getElementById('projects');
		const yOffset = -25;
		const y = target.getBoundingClientRect().top + yOffset;
		window.scrollTo({ top: y, behavior: 'smooth' });
	};
	return (
		<header className={styles.heroWrapper}>
			<h1 className={styles.title}>
				<span className={styles.red_span}>{`> `}</span>Jon Collins
			</h1>
			<h3 className={styles.subtitle}>
				Full Stack <span className={styles.red_span}>Developer</span>
			</h3>
			<div className={styles.button_group}>
				<a
					className={styles.btn_resume}
					aria-label='Desktop users - this will download the Jonathan Collins Tech Resume PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF'
					href={`/`}
					download='collins_devcv.pdf'
					alt="Desktop users - This link will download a pdf copy of Jon's resume to your computer - on mobile devices the resume will simple be displayed as a static page">
					See my Resume
				</a>
				<button className={styles.btn_jump} onClick={() => scrollToProjects()}>
					Jump to Projects
				</button>
			</div>
		</header>
	);
}
export default Hero;
