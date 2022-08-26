import Header from '../../components/Header';
import HeaderImage from '../../assets/images/header_bg_5.jpg';
import { trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import './Trainers.css';
import Trainer from '../../components/Trainer';

const Trainers = () => {
	return (
		<>
			<Header title="Our Trainers" image={HeaderImage}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cumque,
				delectus ratione illum optio harum aperiam libero velit exercitationem
				autem!
			</Header>
			<section className="trainers">
				<div className="container trainers__container">
					{trainers.map(({ id, name, image, job, socials }) => {
						return (
							<Trainer
								key={id}
								name={name}
								image={image}
								job={job}
								socials={[
									{
										icon: <BsInstagram />,
										link: socials[0],
									},
									{
										icon: <AiOutlineTwitter />,
										link: socials[1],
									},
									{
										icon: <FaFacebookF />,
										link: socials[2],
									},
									{
										icon: <FaLinkedinIn />,
										link: socials[3],
									},
								]}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Trainers;
