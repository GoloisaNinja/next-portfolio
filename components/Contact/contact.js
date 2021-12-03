import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaDrawPolygon, FaGithubAlt } from 'react-icons/fa';
import { BsReddit, BsLinkedin, BsTwitter } from 'react-icons/bs';
//import Modal from "../Modal";

import styles from './contact.module.scss';

function Contact() {
	const [show, setShow] = useState(false);
	const [content, setContent] = useState({
		title: `Message Sent!`,
		body: `Really feeling the love! Thank you for reaching out! I'll be in touch soon.`,
		type: 'dismiss',
		icon: '/feelings.png',
	});
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const { name, email, message } = formData;
	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleDismiss = () => {
		setShow(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setContent({ ...content, title: `Thank you ${name}!` });
		fetch('/', {
			method: 'POST',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
			},
			body: encode({ 'form-name': 'new-portfolio-contact', ...formData }),
		})
			.then(() => {
				setShow(true);
				setFormData({ name: '', email: '', message: '' });
				return console.log('Success!');
			})
			.catch((error) => {
				console.log('error tripped');
				return alert(
					`Whoops - something unexpected happened...please try again later`
				);
			});
	};
	return (
		<>
			<div className={styles.hashPositionNavOffset} id='contact'></div>
			<section className={styles.contact_container}>
				<div className={styles.intro}>
					<h3>
						<span className={styles.red_span}>{`> `}</span>everyone loves a
						contact form
					</h3>
					<span role='img' aria-label='wave emoji'>
						👋🏻
					</span>
					<h5>
						{`I'm just going to say it. I like you. We should keep in touch. There
        are lots of different ways to connect with me, the contact form below, 
        Twitter, LinkedIn, murder mystery weekends, and long walks on the beach. 
        But yeah, the contact form and social media links are probably the easiest! Thank
        you for visiting and come back soon! 
        `}
					</h5>
					<h5>{`I don't know how to put this but I'm kind of a big deal.`}</h5>
				</div>
				<div className={styles.icon_container}>
					<div className={styles.icon_card}>
						<Link href='https://www.polywork.com/jcollins' passHref>
							<a
								aria-label='Find Jon on Polywork'
								alt="Link to Jon's Polywork account profile">
								<FaDrawPolygon />
							</a>
						</Link>
						<p>POLYWORK</p>
					</div>
					<div className={styles.icon_card}>
						<Link href='https://twitter.com/goloisaninja' passHref>
							<a
								href='https://twitter.com'
								aria-label='Find Jon on Twitter'
								alt="Link to Jon's twitterverse">
								<BsTwitter />
							</a>
						</Link>
						<p>TWITTER</p>
					</div>
					<div className={styles.icon_card}>
						<Link href='https://www.linkedin.com/in/jonmcollins' passHref>
							<a
								aria-label='Find Jon on LinkedIn'
								alt="Link to Jon's LinkedIn Profile">
								<BsLinkedin />
							</a>
						</Link>
						<p>LINKEDIN</p>
					</div>
					<div className={styles.icon_card}>
						<Link href='https://github.com/goloisaninja' passHref>
							<a
								aria-label="Visit Jon's Github profile and repos"
								alt="Link to Jon's Githubverse">
								<FaGithubAlt />
							</a>
						</Link>
						<p>GITHUB</p>
					</div>
					<div className={styles.icon_card}>
						<Link href='https://reddit.com/user/goloisaninja' passHref>
							<a
								aria-label="Visit Jon's vury small reddit presence"
								alt="Link to Jon's one post reddit account">
								<BsReddit />
							</a>
						</Link>
						<p>REDDIT</p>
					</div>
				</div>
				<div className={styles.form_container}>
					<form
						className={styles.contact_form}
						name='new-portfolio-contact'
						id='contact-form'
						method='POST'
						data-netlify='true'
						onSubmit={(e) => handleSubmit(e)}>
						<input type='hidden' name='new-portfolio-contact' value='contact' />
						<div className={styles.form_group}>
							<input
								className={styles.input_name}
								type='text'
								id='name'
								name='name'
								value={name}
								onChange={(e) => onChange(e)}
								required
							/>
							<label className={styles.label_floating} htmlFor='name'>
								your name
							</label>
						</div>
						<div className={styles.form_group}>
							<input
								className={styles.input_email}
								type='email'
								id='email'
								name='email'
								value={email}
								onChange={(e) => onChange(e)}
								required
							/>
							<label className={styles.label_floating} htmlFor='email'>
								your email
							</label>
						</div>
						<div className={styles.form_group}>
							<textarea
								className={styles.input_message}
								cols='30'
								rows='10'
								id='message'
								name='message'
								value={message}
								onChange={(e) => onChange(e)}
								required></textarea>
							<label className={styles.label_floating} htmlFor='message'>
								message body
							</label>
						</div>
						<div>
							<button
								className={styles.btn_submit}
								aria-label='contact form submit button to send your message to Jon'
								type='submit'>
								<FaArrowRight />
							</button>
							<p>send your message!</p>
						</div>
					</form>
				</div>
				{/* <Modal show={show} handleDismiss={handleDismiss} content={content} /> */}
			</section>
		</>
	);
}
export default Contact;
