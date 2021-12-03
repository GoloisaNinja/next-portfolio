import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './blogArticleCard.module.scss';

export function BlogArticleCard({ title, preview, image }) {
	const router = useRouter();
	const altImageText = {
		'Changing careers is scary': 'A lone boat on a very big body of water',
		'Avoiding te dreaded React Flicker':
			'An old tube television displaying flickering static',
		'How many stacks is too many stacks': 'A colorful stack of macaroons',
		'Moonlander Keyboard Review - part 1':
			'A close up picture of the RGB lighting of the ZSA Moonlander Keyboard taken from the right hand side of the keyboard cluster',
	};
	const tags = {
		'Changing careers is scary': [
			{ id: '1a', tag: 'tech' },
			{ id: '1b', tag: 'career' },
			{ id: '1c', tag: 'opinion' },
		],
		'Avoiding the dreaded React Flicker': [
			{ id: '2a', tag: 'react' },
			{ id: '2b', tag: 'hooks' },
			{ id: '2c', tag: 'javascript' },
		],
		'How many stacks is too many stacks': [
			{ id: '3a', tag: 'opinion' },
			{ id: '3b', tag: 'stacks' },
			{ id: '3c', tag: 'newbie' },
		],
		'Moonlander Keyboard Review - part 1': [
			{ id: '4a', tag: 'hardware' },
			{ id: '4b', tag: 'mechs' },
			{ id: '4c', tag: 'review' },
		],
	};
	const altImage = altImageText[title];
	const badges = tags[title];
	const articleNav = encodeURIComponent(title);
	return (
		<button
			className={styles.btn_blogArticle_container}
			onClick={() => router.push(`/${articleNav}`)}>
			<div className={styles.image_backdrop}>
				<Image
					src={image.url}
					sizes='100%'
					objectFit='cover'
					layout='fill'
					placeholder='blur'
					blurDataURL={image.url}
					alt={altImage}
				/>
			</div>
			<h4 className={styles.title}>
				<span className={styles.red_span}>{'> '}</span>
				{title}
			</h4>
			<p className={styles.preview}>{preview}</p>
			<div className={styles.badge_container}>
				{badges.map((badge) => (
					<div className={styles.badge} key={badge.id}>
						{badge.tag}
					</div>
				))}
			</div>
		</button>
	);
}
export default BlogArticleCard;
