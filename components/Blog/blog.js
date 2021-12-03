import BlogArticleCard from '../BlogArticleCard/blogArticleCard';
import styles from './blog.module.scss';

function Blog({ articles }) {
	return (
		<>
			<div className={styles.hashPositionNavOffset} id='blog'></div>
			<section className={styles.blog_container}>
				<div className={styles.intro}>
					<h3>
						<span className={styles.red_span}>{`> `}</span>superfluous content
						creation
					</h3>
					<h5>{`Your company thrives on content creation and innovation, and so do I!
        I'm endeavouring to increase my presence in the tech community, and what is the
        best way to do that you ask? Creating a blog that almost no one will read obviously! 
        I create everything from ridiculous opinion pieces to technical articles about
        topics that gave me trouble, but likely wouldn't have if I'd only read that pesky
        documentation. The coding journey is fraught with frights and perils, so why not 
        share my personal pain, I mean progress.
        `}</h5>

					<div className={styles.button_group}>
						<a
							aria-label="Visit Jon's Full Developer Blog site and read all the things!"
							href='https://jcodes.blog'
							alt="This will magically take you to Jon's blog where you can read amazing things">
							Visit full Blog
						</a>
						<a
							aria-label="See Jon's gatsby blog repo code at Github"
							href='https://github.com/GoloisaNinja/gatsbyDevBlog'
							alt="This link will take you to Jon's github repo for his gatsby blog so you can browse the code and see how he built it">
							How I built It
						</a>
					</div>
					<h5>{`Featured articles. Click to read.
        `}</h5>
				</div>
				<div className={styles.article_grid}>
					{articles.map((article) => (
						<BlogArticleCard
							key={article.id}
							title={article.title}
							preview={article.preview}
							link={article.title.replaceAll(' ', '_')}
							image={article.image}
						/>
					))}
				</div>
			</section>
		</>
	);
}
export default Blog;
