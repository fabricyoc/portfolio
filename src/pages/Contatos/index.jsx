import styles from './Contatos.module.css';

// Ícones utilizando https://react-icons.github.io/react-icons/
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube, CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


function Contatos() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>
        Para que possamos conversar mais sobre.
      </p>
      <div className={styles.icones}>

        <a
          href="mailto:proffabricyo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMail className={styles.icone} />
        </a>

        <a
          href="https://instagram.com/fabricyoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icone} />
        </a>

        <a
          href="https://www.youtube.com/@nonacamada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiYoutube className={styles.icone} />
        </a>

        <a
          href="https://github.com/fabricyoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className={styles.icone} />
        </a>

        <a
          href="https://www.linkedin.com/in/fabricyoc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin className={styles.icone} />
        </a>
      </div>
    </section>
  );
};

export default Contatos;
