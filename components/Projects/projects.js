import ProjectCard from '../ProjectCard/projectCard';
import styles from './projects.module.scss';
import { nanoid } from 'nanoid';

function Projects() {
	const projectObjectArray = [
		{
			id: 'p1',
			title: `Culchr`,
			description: `Hilarious Corporate Culture and Values Generator`,
			tags: [`React`, `React Router`, `QueryParams`, `API's`],
			github: `https://github.com/GoloisaNinja/Culchr-app`,
			live: `https://www.culchr.pw`,
			name: 'culchrReactApp',
			imgsrc: '/culchrReactApp.png',
		},
		{
			id: 'p2',
			title: `Hat Attack`,
			description: `Gatsby Shopify Build with Checkout`,
			tags: [`Shopify`, `GraphQL`, `Styled Components`, `Gatsby`],
			github: `https://github.com/GoloisaNinja/hatAttack`,
			live: `https://wizardly-banach-d5eea6.netlify.app/`,
			name: 'hatShopify',
			imgsrc: '/hatShopify.png',
		},
		{
			id: 'p3',
			title: `Useddit`,
			description: `Complex VueJS Reddit Clone`,
			tags: [`VueJS`, `VuexFire`, `Vue Router`, `Firestore`],
			github: `https://github.com/GoloisaNinja/useddit`,
			live: `https://useddit.netlify.app/`,
			name: 'usedditReddit',
			imgsrc: '/usedditReddit.png',
		},
		{
			title: `Neon Unicorn`,
			description: `Advanced E-commerce Platform and Shop`,
			tags: [`Gatsby`, `E-commerce`, `Jamstack`, `Shopify`],
			github: `https://github.com/GoloisaNinja/wifeyTestShop`,
			live: `https://neonunicorntest.netlify.app/`,
			name: 'neonUnicornShop',
			imgsrc: '/neonUnicornShop.png',
		},
		{
			id: 'p4',
			title: `Movie Partners`,
			description: `Massive React Project with Custom Backend`,
			tags: [`React`, `ContextAPI`, `MongoDB`, `NodeJS`],
			github: `https://github.com/GoloisaNinja/movie-partners`,
			live: `https://www.wewatch.pw`,
			name: 'mp',
			imgsrc: '/mp.png',
		},
		{
			id: 'p5',
			title: `Expencils`,
			description: `Complex Finance Tracking Application`,
			tags: [`React`, `Redux`, `React Router`, `Firebase`],
			github: `https://github.com/GoloisaNinja/expencils`,
			live: `https://collins-expencils.herokuapp.com/`,
			name: 'expencils',
			imgsrc: '/expencils.png',
		},
		{
			id: 'p6',
			title: `Shortly`,
			description: `Bit.ly Url Shortener Clone`,
			tags: [`VueJS`, `NodeJS`, `Express`, `MongoDB`],
			github: `https://github.com/GoloisaNinja/shortlyURL`,
			live: `https://www.fpd.pw`,
			name: 'shortly1',
			imgsrc: '/shortly1.png',
		},
		{
			id: 'p7',
			title: `Newbsanity`,
			description: `Full Feature Fitness and Social Platform Application`,
			tags: [`React`, `Router`, `Redux`, `Custom CMS`],
			bgColor: `#a61403`,
			github: `https://github.com/GoloisaNinja/newbsanity-app`,
			live: `https://collins-newbsanity.herokuapp.com/`,
			name: 'newbsanity',
			imgsrc: '/newbsanity.png',
		},
		{
			id: 'p8',
			title: `SocialDevs`,
			description: `Social Platform Application for Developers`,
			tags: [`React`, `React Router`, `Redux`, `MongoDB`],
			github: `https://github.com/GoloisaNinja/SocialDevs`,
			live: `https://collins-socialdevs.herokuapp.com/`,
			name: 'socialDevs',
			imgsrc: '/socialDevs.png',
		},
		{
			id: 'p9',
			title: `PlayPaws`,
			description: `Media Review Application with Dogs!`,
			tags: [`Next.js`, `Strapi`, `WIP`, `API`],
			github: `https://github.com/GoloisaNinja/PlayPawsReview`,
			live: `https://playpaws.netlify.app/`,
			name: 'playpaws',
			imgsrc: '/playpaws.png',
		},
		{
			id: 'p10',
			title: `Resume Noir`,
			description: `Choose Your Own Adventure Resume Game`,
			tags: [`React`, `Context`, `SPA`, `Audio`],
			github: `https://github.com/GoloisaNinja/resume-game`,
			live: `https://jcodes.me`,
			name: 'rgame',
			imgsrc: '/rgame.png',
		},
	];

	return (
		<>
			<div className={styles.hashPositionNavOffset} id='projects'></div>
			<section className={styles.projects_container}>
				<div className={styles.intro}>
					<h3>
						<span className={styles.red_span}>{`> `}</span>glorious project
						applications
					</h3>
					<h5>{`You are looking for a developer that can build applications and 
        create meaningful user experiences? I'm showcasing a few of my more popular 
        applications just below. Ever needed an application to generate an entirely 
        phony corporate culture to indoctrinate your drones? Of course you have! 
        Maybe you need a fully
        featured media application to track your favorite shows and movies, share watchlists, 
        or just find related content? My diverse project set illustrates my flexibility with 
        frontend and backend technologies, while also confirming you probably don't want me
        making your HR slide decks.
        `}</h5>
				</div>
				<div className={styles.projectCard_container}>
					{projectObjectArray.map((obj) => (
						<ProjectCard
							key={nanoid(6)}
							image={obj.imgsrc}
							title={obj.title}
							description={obj.description}
							tags={obj.tags}
							github={obj.github}
							live={obj.live}
						/>
					))}
				</div>
			</section>
		</>
	);
}
export default Projects;
