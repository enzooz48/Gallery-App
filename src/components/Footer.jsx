import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="FooterLogo" />
					</Link>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
						animi.
					</p>
					<div className="footer__socials">
						<a
							href="http://linkedin.com/"
							target="_blank"
							rel="noopener noreferrer">
							<FaLinkedin />
						</a>
						<a
							href="http://facebook.com/"
							target="_blank"
							rel="noopener noreferrer">
							<FaFacebookF />
						</a>
						<a
							href="http://twitter.com/"
							target="_blank"
							rel="noopener noreferrer">
							<AiOutlineTwitter />
						</a>
						<a
							href="http://instagram.com/"
							target="_blank"
							rel="noopener noreferrer">
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="#">Blog</Link>
					<Link to="#">Case Studies</Link>
					<Link to="#">Events</Link>
					<Link to="#">Communities</Link>
					<Link to="#">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="#">Contact Us</Link>
					<Link to="#">Support</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small>2022 EnZooZ &copy; All Rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
