import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout/layout';
import ReactMarkdown from 'react-markdown';
import { FaTwitter } from 'react-icons/fa';
import axios from 'axios';
import styles from './[articleId].module.scss';

function ArticleTemplate({ article }) {
	const router = useRouter();
	const altImageText = {
		'Changing careers is scary': 'A lone boat on a very big body of water',
		'Avoiding te dreaded React Flicker':
			'An old tube television displaying flickering static',
		'How many stacks is too many stacks': 'A colorful stack of macaroons',
		'Moonlander Keyboard Review - part 1':
			'A close up picture of the RGB lighting of the ZSA Moonlander Keyboard taken from the right hand side of the keyboard cluster',
	};
	const altImage = altImageText[article.title];
	return (
		<Layout>
			<div className={styles.article_container}>
				<div className={styles.intro}>
					<h1 className={styles.title}>
						<span className={styles.red_span}>{`> `}</span>
						{article.title}
					</h1>
					<div className={styles.byline_container}>
						<p>By {article.author.username}</p>
						<Image
							className={styles.author_image}
							src={article.author.avatar.url}
							width={40}
							height={40}
							blurDataURL={article.author.avatar.url}
							alt='Author Image of Jon Collins looking thoughtful and witty and handsome'
						/>
						<Link href='https://twitter.com/goloisaninja' passHref>
							<a
								href='https://twitter.com'
								aria-label='Find Jon on Twitter'
								alt="Link to Jon's twitterverse">
								<FaTwitter />
							</a>
						</Link>
					</div>
					<div className={styles.btn_group}>
						<button onClick={() => router.push('/')}>Back to portfolio</button>
					</div>
				</div>
				<div className={styles.articleImage_backdrop}>
					<Image
						src={article.image.url}
						sizes='100%'
						objectFit='cover'
						layout='fill'
						placeholder='blur'
						blurDataURL={article.image.url}
						alt={altImage}
					/>
				</div>
				<div className={styles.strapi_container}>
					<ReactMarkdown children={article.content} />
				</div>
			</div>
		</Layout>
	);
}
export async function getStaticProps(context) {
	const { params } = context;
	const response = await axios.get(
		'https://jcodesblogcms.herokuapp.com/articles'
	);
	let article = {};
	const articleId = decodeURIComponent(params.articleId);
	if (response.data.length > 0) {
		article = response.data.find((article) => article.title === articleId);
	}
	return {
		props: { article },
	};
}
export async function getStaticPaths() {
	const ids = [2, 5, 6, 7];
	const articleArray = [];
	const response = await axios.get(
		'https://jcodesblogcms.herokuapp.com/articles'
	);
	if (response.data.length > 0) {
		for (let i = 0; i < ids.length; i++) {
			response.data.forEach((article) => {
				if (article.id === ids[i]) {
					articleArray.push(article);
				}
			});
		}
	}
	const pathsWithParams = articleArray.map((article) => ({
		params: { articleId: article.title },
	}));
	return {
		paths: pathsWithParams,
		fallback: false,
	};
}
export default ArticleTemplate;
