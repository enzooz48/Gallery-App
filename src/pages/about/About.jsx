import Header from '../../components/Header';
import HeaderImage from '../../assets/images/header_bg_1.jpg';
import StoryImage from '../../assets/images/about1.jpg';
import './About.css';
import VisionImage from '../../assets/images/about2.jpg';
import MissionImage from '../../assets/images/about3.jpg';

const About = () => {
	return (
		<>
			<Header title="About Us" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa
				exercitationem soluta error! Iste, dolores.
			</Header>

			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="OutStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							ullam fuga qui tenetur quam ipsa placeat obcaecati fugit!
							Consequuntur, impedit similique. Veritatis necessitatibus
							quibusdam animi laborum alias labore corporis magni?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
							iure, assumenda alias laboriosam culpa praesentium!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Officiis, veniam?
						</p>
					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							ullam fuga qui tenetur quam ipsa placeat obcaecati fugit!
							Consequuntur, impedit similique. Veritatis necessitatibus
							quibusdam animi laborum alias labore corporis magni?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
							recusandae incidunt unde repudiandae! Autem, a!
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
							eveniet.
						</p>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="OutVisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="OutMissionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							ullam fuga qui tenetur quam ipsa placeat obcaecati fugit!
							Consequuntur, impedit similique. Veritatis necessitatibus
							quibusdam animi laborum alias labore corporis magni?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
							iure, assumenda alias laboriosam culpa praesentium!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Officiis, veniam?
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
