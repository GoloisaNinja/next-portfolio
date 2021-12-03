import { useRouter } from 'next/dist/client/router';
import styles from './menu.module.scss';

function Menu({ handleNav, show }) {
	const router = useRouter();
	const pathname = router.pathname;
	const checkLocation = (target) => {
		if (pathname !== '/') {
			router.push(`/#${target}`);
		} else {
			handleNav(target, false);
		}
	};

	const handleMenu = (e) => {
		checkLocation(e.target.innerHTML);
	};
	return (
		<div
			className={!show ? styles.nav_container_show : styles.nav_container}
			id='navs'>
			<button
				className={styles.btn_nav}
				id='navItem'
				tabIndex='0'
				onKeyDown={(e) => e.code === 'Enter' && handleMenu(e)}
				onClick={(e) => handleMenu(e)}>
				about
			</button>
			<button
				className={styles.btn_nav}
				id='navItem'
				onKeyDown={(e) => e.code === 'Enter' && handleMenu(e)}
				onClick={(e) => handleMenu(e)}>
				blog
			</button>
			<button
				className={styles.btn_nav}
				id='navItem'
				onKeyDown={(e) => e.code === 'Enter' && handleMenu(e)}
				onClick={(e) => handleMenu(e)}>
				projects
			</button>
			<button
				className={styles.btn_nav}
				id='navItem'
				onKeyDown={(e) => e.code === 'Enter' && handleMenu(e)}
				onClick={(e) => handleMenu(e)}>
				contact
			</button>
		</div>
	);
}
export default Menu;
