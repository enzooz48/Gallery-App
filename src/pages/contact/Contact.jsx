import Header from '../../components/Header';
import HeaderImage from '../../assets/images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsNewspaper } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import './Contact.css';

const Contact = () => {
	return (
		<>
			<Header title="Get In Touch" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
				consectetur possimus animi ex amet.
			</Header>
			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="mailto:enzooz4889@gmail.com"
							target="_blank"
							rel="noreferrer noopener">
							<MdEmail />
						</a>
						<a
							href="http://m.me/ngockhanh48"
							target="_blank"
							rel="noreferrer noopener">
							<BsNewspaper />
						</a>
						<a
							href="http://wa.me/+84976257332"
							target="_blank"
							rel="noreferrer noopener">
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
