import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithubAlt, FaGlobe, FaCaretRight } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import styles from './projectCard.module.scss';

function ProjectCard({ image, title, description, tags, github, live }) {
	const [shouldProjectSectionExpand, setShouldProjectSectionExpand] =
		useState(false);

	const handleSectionExpand = () => {
		setShouldProjectSectionExpand(!shouldProjectSectionExpand);
	};

	const followLink = async (e, link) => {
		window.open(link);
	};
	return (
		<div className={styles.container}>
			<div className={styles.image_backdrop}>
				<Image
					src={image}
					sizes='100%'
					objectFit='cover'
					layout='fill'
					placeholder='blur'
					blurDataURL={image}
					alt={`an image of a computer and cell phone displaying the ${title} project`}
				/>
			</div>
			<section className={styles.content_section}>
				<div>
					<h5>{title}</h5>
					<button
						className={
							!shouldProjectSectionExpand
								? styles.btn_expand
								: styles.btn_expand_rotate
						}
						aria-label={`expands and contracts the detail section for the ${title} project`}
						onClick={(e) => handleSectionExpand()}>
						<FaCaretRight />
					</button>
				</div>
				<div
					className={
						!shouldProjectSectionExpand ? styles.drawer : styles.drawer_expanded
					}>
					<div className={styles.tag_container}>
						{tags.map((tag) => (
							<div className={styles.tag_badge} key={nanoid(4)}>
								{tag}
							</div>
						))}
					</div>
					<p className={styles.description}>{description}</p>
					<div className={styles.link_container}>
						<button
							className={styles.btn_link}
							aria-label={`navigates to the github repository for the ${title} project`}
							onClick={(e) => followLink(e, github)}>
							<span className='btnText'>
								<FaGithubAlt /> code
							</span>
						</button>
						<button
							className={styles.btn_link_inverse}
							aria-label={`navigates to the live site for the ${title} project`}
							onClick={(e) => followLink(e, live)}>
							<span className='btnText'>
								<FaGlobe /> live
							</span>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
export default ProjectCard;
