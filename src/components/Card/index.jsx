import styles from './Card.module.css';
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsFiletypePhp } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { IoIosHelpCircleOutline } from 'react-icons/io';


function Card({ titulo, descricao, url, url_linguagens }) {

  const iconesLinguagens = {
    html: <BsFiletypeHtml />,
    css: <BsFiletypeCss />,
    javascript: <BsFiletypeJs />,
    php: <BsFiletypePhp />,
    react: <FaReact />,
    null: <IoIosHelpCircleOutline />
  }

  const [linguagens, setLinguagens] = useState([]);

  useEffect(() => {
    const buscarLinguagens = async () => {
      const token = import.meta.env.VITE_API_TOKEN;

      const resposta = await fetch(url_linguagens, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const dados = await resposta.json();
      setLinguagens(dados);
    }
    buscarLinguagens();

  }, []);

  // Função para obter o ícone correspondente
  const renderIcones = (linguagem) => {
    const chave = linguagem.toLowerCase();
    return iconesLinguagens[chave] || iconesLinguagens[null];
  };


  return (
    <section className={styles.card}>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className={styles.cardFooter}>
        <div className={styles.cardIcones}>
          {
            linguagens && Object.keys(linguagens).map(
              (linguagem, index) => (
                <span key={index}>{renderIcones(linguagem)}</span>
              )
            )
          }
        </div>
        <a href={url} className={styles.cardBotao} target='_blank' rel='noopener noreferrer'>
          <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Card;

