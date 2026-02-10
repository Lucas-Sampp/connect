import styles from './About.module.scss';
import aboutBackground from '../../assets/BackgroundQuemSomos.png';

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutLayout}>
        <div
          className={styles.aboutImage}
          style={{ backgroundImage: `url(${aboutBackground})` }}
          aria-hidden="true"
        />

        <div className={styles.aboutContent}>
          <h1>Como a Connect atua em projetos sociais</h1>

          <p>
            A Connect é uma iniciativa que conecta empresas, pessoas e organizações
            sociais com um propósito em comum: gerar impacto positivo e transformar
            realidades. Atuamos no desenvolvimento e apoio a projetos sociais nas áreas
            de educação, inclusão, tecnologia, esporte e assistência social, sempre com
            foco em impacto real e sustentável.
          </p>

          <p>
            Há anos, trabalhamos aproximando quem quer ajudar de quem precisa, promovendo
            ações sociais estruturadas, transparentes e alinhadas às necessidades das
            comunidades. Acreditamos que a transformação acontece quando propósito,
            colaboração e responsabilidade caminham juntos.
          </p>

          <p>
            Nosso compromisso é conectar boas causas a quem deseja fazer a diferença,
            criando pontes entre empresas, voluntários e projetos sociais que realmente
            transformam vidas.
          </p>
        </div>
      </div>
    </section>
  );
}
