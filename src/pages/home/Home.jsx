import FAQs from '../../components/FAQs';
import Header from '../../components/Header';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import './Home.css';

const Home = () => {
	return (
		<>
			<Header />
			<Programs />
			<Values />
			<FAQs />
		</>
	);
};

export default Home;
