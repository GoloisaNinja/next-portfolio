//import resumePDF from "../../utils/collins_dev_resume.pdf";
//import cvPDF from "../../utils/collins_dev_cv.pdf";
import Link from 'next/link';
import { FaMugHot, FaDrawPolygon } from 'react-icons/fa';
import { CgCopyright } from 'react-icons/cg';
import { FaGithubAlt } from 'react-icons/fa';
import { BsReddit, BsLinkedin, BsTwitter } from 'react-icons/bs';
import styles from './footer.module.scss';

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles.footer_container}>
			<div className={styles.grid_container}>
				<div className={styles.link_container}>
					<h4 className={styles.title}>Resume Stuff</h4>
					<Link href='https://jcodes.me' passHref>
						<a
							aria-label='Jon built this Resume Adventure game - check it out!'
							alt="This is a link to Jon's Resume Adventure Game at Jcodes.me">
							Resume Game
						</a>
					</Link>
					<Link href='/' passHref>
						<a
							aria-label='on desktop this will download the Jonathan Collins Tech Resume PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF'
							alt="This link will download a pdf copy of Jon's resume to your computer - on mobile devices the resume will simple be displayed as a static page">
							Download Resume
						</a>
					</Link>
					<Link href='/' passHref>
						<a
							aria-label='on desktop this will download the Jonathan Collins Tech Resume Inforgraphic PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF'
							alt="This link will download a pdf copy of Jon's Infographic Resume PDF - on mobile it will simple display as a static page">
							Resume Infographic
						</a>
					</Link>
				</div>
				<div className={styles.link_container}>
					<h4 className={styles.title}>Blog Stuff</h4>
					<Link href='https://jcodes.blog' passHref>
						<a
							aria-label="Visit Jon's full blog page and read all articles"
							alt="This will transport you to Jon's Blog page">
							Visit Blog
						</a>
					</Link>
					<Link href='https://jcodes.blog/about' passHref>
						<a
							aria-label='A more in depth look at Jon - if you are into that kind of thing'
							alt="This will take you directly to the about section of Jon's blog where you can read about him">
							More About Me
						</a>
					</Link>
				</div>
				<div className={styles.link_container}>
					<h4 className={styles.title}>Misc</h4>
					<Link href='https://www.freepik.com' passHref>
						<a
							aria-label='Browse Freepik for Icons'
							alt='This will take you to Freepik.com for icons'>
							Modal Icon by Freepik
						</a>
					</Link>
					<Link href='https://www.unsplash.com' passHref>
						<a
							aria-label='Browse unsplash for high quality free images'
							alt='This will take you to unsplash for images'>
							Blog Images by Unsplash
						</a>
					</Link>
				</div>
				<div className={styles.social_container}>
					<h4 className={styles.title}>Social</h4>
					<div className={styles.social_grid}>
						<Link href='https://www.polywork.com/jcollins' passHref>
							<a
								aria-label='Find Jon on Polywork'
								alt="Link to Jon's Polywork account profile">
								<FaDrawPolygon />
							</a>
						</Link>
						<Link href='https://twitter.com/goloisaninja' passHref>
							<a
								href='https://twitter.com'
								aria-label='Find Jon on Twitter'
								alt="Link to Jon's twitterverse">
								<BsTwitter />
							</a>
						</Link>
						<Link href='https://www.linkedin.com/in/jonmcollins' passHref>
							<a
								aria-label='Find Jon on LinkedIn'
								alt="Link to Jon's LinkedIn Profile">
								<BsLinkedin />
							</a>
						</Link>
						<Link href='https://github.com/goloisaninja' passHref>
							<a
								aria-label="Visit Jon's Github profile and repos"
								alt="Link to Jon's Githubverse">
								<FaGithubAlt />
							</a>
						</Link>
						<Link href='https://reddit.com/user/goloisaninja' passHref>
							<a
								aria-label="Visit Jon's vury small reddit presence"
								alt="Link to Jon's one post reddit account">
								<BsReddit />
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.copyright_container}>
				<h3>Jon Collins Portfolio</h3>
				<p>
					Made with lots of <FaMugHot /> and Next.js
				</p>
				<p>
					Copyright <CgCopyright /> {currentYear}
				</p>
			</div>
		</footer>
	);
}
export default Footer;
