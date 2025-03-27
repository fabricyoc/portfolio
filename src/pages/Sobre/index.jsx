import styles from './Sobre.module.css';
import avatar from './images/avatar.jpeg';
import { FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { PiFileSql } from "react-icons/pi";

function Sobre() {
  return (
    <section className={styles.sobre}>

      <div className={styles.bio}>
        <figure>
          <img
            src={avatar}
            alt="Avatar indisponível"
            className={styles.avatar}
          />
        </figure>
        <div className={styles.textos}>
          <h2>Sobre</h2>
          <p>
            Sou <span>Fabricyo</span> <br />
            <strong>Dev Full Stack</strong>
          </p>
          <p>
            Trabalho com Desenvolvimento Web desde 2015
          </p>
          <p>
            Especialista em Engenharia de Software
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <FaHtml5 className={styles.icone} />
          <IoLogoCss3 className={styles.icone} />
          <FaJsSquare className={styles.icone} />
          <FaReact className={styles.icone} />
          <PiFileSql className={styles.icone} />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
