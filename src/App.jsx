import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

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
          <button className='btn btn-red'>
            Saiba mais
          </button>
        </div>
        <figure>
          <img className='img-home' src='/developer-red.svg' alt='Imagem de home' />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App;