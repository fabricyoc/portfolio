import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<section className={styles.home}>
			<div className={styles.apresentacao}>
				<p>
					Olá, sou <br />
					<span>Fabricyo</span> <br />
					Dev Full Stack
				</p>
				<Link to='/sobre'>
					{/* <button className='btn btn-red'> */}
					<button className={`${styles.btn} ${styles.btn_red}`}>
						Saiba mais
					</button>
				</Link>
			</div>
			<figure>
				<img className={styles.imgHome} src='/developer-red.svg' alt='Imagem de home' />
			</figure>
		</section>
	);
};

export default Home;
