import Header from '../../components/Header';
import HeaderImage from '../../assets/images/header_bg_3.jpg';

import './Gallery.css';

const Gallery = () => {
	const galleryLength = 15;
	const images = [];

	for (let i = 1; i <= galleryLength; i++) {
		images.push(require(`../../assets/images/gallery${i}.jpg`));
	}

	return (
		<>
			<Header title="Our Gallery" image={HeaderImage}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
				impedit rem temporibus natus rerum et magni odit eligendi, saepe
				consequatur!
			</Header>
			<section className="gallery">
				<div className="container gallery__container">
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt={`GalleryImage ${index + 1}`} />
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Gallery;
