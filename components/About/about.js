import React from 'react';
import Image from 'next/image';
import { BsColumnsGap } from 'react-icons/bs';
import styles from './about.module.scss';

function About() {
	const iconCardArray = [
		{
			id: '1icon',
			el: '/postman.svg',
			text: 'API',
		},
		{
			id: '2icon',
			el: '/terminal.svg',
			text: 'CMDLINE',
		},
		{
			id: '3icon',
			el: '/css3.svg',
			text: 'CSS',
		},
		{
			id: '4icon',
			el: '/firebase.svg',
			text: 'FIREBASE',
		},
		{
			id: '5icon',
			el: '/gatsby.svg',
			text: 'GATSBY',
		},
		{
			id: '6icon',
			el: '/git.svg',
			text: 'GIT',
		},
		{
			id: '7icon',
			el: '/githubalt.svg',
			text: 'GITHUB',
		},
		{
			id: '8icon',
			el: '/graphql.svg',
			text: 'GRAPHQL',
		},
		{
			id: '9icon',
			el: '/html5.svg',
			text: 'HTML',
		},
		{
			id: '10icon',
			el: '/javascript.svg',
			text: 'JAVASCRIPT',
		},
		{
			id: '11icon',
			el: '/mongodb.svg',
			text: 'MONGODB',
		},
		{
			id: '12icon',
			el: '/nextdotjs.svg',
			text: 'NEXT.JS',
		},
		{
			id: '13icon',
			el: '/sqlserver.svg',
			text: 'SQLSERVER',
		},
		{
			id: '14icon',
			el: '/netlify.svg',
			text: 'JAMSTACK',
		},
		{
			id: '15icon',
			el: '/nodejs.svg',
			text: 'NODEJS',
		},
		{
			id: '16icon',
			el: '/npm.svg',
			text: 'NPM',
		},
		{
			id: '17icon',
			el: '/react.svg',
			text: 'REACT',
		},
		{
			id: '18icon',
			el: '/redux.svg',
			text: 'REDUX',
		},
		{
			id: '19icon',
			el: '/sass.svg',
			text: 'SASS',
		},
		{
			id: '20icon',
			el: '/shopify.svg',
			text: 'SHOPIFY',
		},
		{
			id: '21icon',
			el: '/strapi.svg',
			text: 'STRAPIJS',
		},
		{
			id: '22icon',
			el: '/vuedotjs.svg',
			text: 'VUEJS',
		},
	];
	return (
		<>
			<div className={styles.hashPositionNavOffset} id='about'></div>
			<section className={styles.about_container}>
				<div className={styles.intro}>
					<h3>
						<span className={styles.red_span}>{`> `}</span>obligatory about
						section
					</h3>
					<h5>
						{`So let's talk about what I can do for you. I have a very 
        specific set of skills. Skills that I've acquired over the last 
        four years in working with JavaScript, React, Express, NodeJS, 
        MongoDB, and many others. Skills that make me the opposite of a 
        nightmare for companies like yours. If you hire me now, that'll be the end 
        of it. I'll work hard for you. I'll create the best code I can for you.
        I will demonstrate strong soft skills, like critical thinking, problem solving,
        an unquenchable desire to learn and grow, and a geniune pride in my work.
        I'll communicate well and often, while being an absolute joy to work with.
        But if you don't hire me. I will look for you on LinkedIn. I will find you. 
        And I will post sad emojis to your feed. Did I mention I'm a 
        `}
						<a
							aria-label='navigates to the Credly site where  you can view the PSM certificate for Jonathan Collins as a Professional Scrum Master'
							href='https://www.credly.com/badges/517ccf0d-c666-4f77-a20e-5581b8d8bec5/public_url'>
							<BsColumnsGap /> Certified Scrum Master
						</a>
						?
					</h5>
					<h5>
						Observe the vast and considerable technologies I employ to bend the
						interwebs to my will.
					</h5>
					<div className={styles.tech_container}>
						{iconCardArray.map((icon) => (
							<div className={styles.techCard} key={icon.id}>
								<Image
									className={styles.icons}
									src={icon.el}
									alt={`an image of an icon representing ${icon.text}`}
									width={45}
									height={45}
								/>
								<p>{icon.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
export default About;
