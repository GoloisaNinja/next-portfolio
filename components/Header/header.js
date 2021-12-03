import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Menu from '../Menu/menu';
import smoothscroll from 'smoothscroll-polyfill';
import styles from './header.module.scss';

function Header() {
	const router = useRouter();
	const pathname = router.pathname;
	const [showMenu, setShowMenu] = useState(true);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};

	const handleHeaderLink = (target) => {
		if (pathname !== '/') {
			router.push(`/#${target}`);
		} else {
			handleNav(target, true);
		}
	};

	const handleNav = async (target, notHamburger) => {
		smoothscroll.polyfill();
		const navTo = document.getElementById(target);
		if (!notHamburger) {
			setShowMenu(true);
		}
		const yOffset = -25;
		const y = navTo?.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: 'smooth' });
	};

	return (
		<>
			<header className={styles.header_container}>
				<div>
					<div className={styles.navlink_container}>
						<button
							aria-label='about navigation button'
							onClick={() => handleHeaderLink('about')}>
							About
						</button>
						<button
							aria-label='blog navigation button'
							onClick={() => handleHeaderLink('blog')}>
							Blog
						</button>
						<button
							aria-label='projects navigation button'
							onClick={() => handleHeaderLink('projects')}>
							Projects
						</button>
						<button
							aria-label='contact navigation button'
							onClick={() => handleHeaderLink('contact')}>
							Contact
						</button>
					</div>
				</div>
			</header>
			<div className={styles.menu_container}>
				<Menu handleNav={handleNav} show={showMenu} />
			</div>
			<div
				className={!showMenu ? styles.hamburger_close : styles.hamburger}
				id='menuBtn'
				tabIndex='0'
				onKeyDown={(e) => e.code === 'Enter' && handleClick()}
				onClick={() => handleClick()}>
				<div className={styles.menuLine} id='btnLine'></div>
				<div className={styles.menuLine} id='btnLine'></div>
				<div className={styles.menuLine} id='btnLine'></div>
			</div>
		</>
	);
}
export default Header;
