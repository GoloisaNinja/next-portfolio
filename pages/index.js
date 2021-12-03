import Layout from '../components/Layout/layout';
import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Blog from '../components/Blog/blog';
import Projects from '../components/Projects/projects';
import Contact from '../components/Contact/contact';
import axios from 'axios';
const Index = ({ articles }) => {
	return (
		<Layout>
			<Hero />
			<About />
			<Blog articles={articles} />
			<Projects />
			<Contact />
		</Layout>
	);
};
export async function getStaticProps() {
	const articleIds = [5, 2, 6, 7];
	let articles = [];
	const response = await axios.get(
		`https://jcodesblogcms.herokuapp.com/articles`
	);
	if (response.data.length > 0) {
		for (let i = 0; i < articleIds.length; i++) {
			response.data.forEach((article) => {
				if (article.id === articleIds[i]) {
					articles.push(article);
				}
			});
		}
	}
	return {
		props: { articles },
	};
}
export default Index;
