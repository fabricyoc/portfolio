import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from './Projetos.module.css';

function Projetos() {

  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {

    const buscarRepositorios = async () => {
      const resposta = await fetch('https://api.github.com/users/fabricyoc/repos');
      const dados = await resposta.json();
      setRepositorios(dados);
    }

    buscarRepositorios();

  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {
        repositorios.length > 0 ? (
          <section className={styles.lista}>
            {
              repositorios.map(
                (repo) => (
                  // sempre que trabalhar com map é necessário a props key
                  <Card
                    key={repo.id}
                    titulo={repo.name}
                    descricao={repo.description}
                    url={repo.html_url}
                  />
                  
                )
              )
            }
          </section>
        ) : (
          <p>Carregando repositórios...</p>
        )
      }
    </section>
  );
};

export default Projetos;
