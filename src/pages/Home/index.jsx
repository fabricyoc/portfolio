import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<Header />
			<section className='container'>
				<div className='apresentacao'>
					<p>
						Olá, sou <br />
						<span>Fabricyo</span> <br />
						Dev Full Stack
					</p>
					<Link to='/sobre'>
						<button className='btn btn-red'>
							Saiba mais
						</button>
					</Link>
				</div>
				<figure>
					<img className='img-home' src='/developer-red.svg' alt='Imagem de home' />
				</figure>
			</section>
			<Footer />
		</>
	);
};

export default Home;
