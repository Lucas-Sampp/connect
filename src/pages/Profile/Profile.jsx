import styles from './Profile.module.scss';
import fotologin from '../../assets/fotologin.png';

export default function Profile() {
  return (
    <section className={styles.profileContainer}>
      <article className={styles.profileCard}>
        <div className={styles.profileImage}>
          <img src={fotologin} alt="Imagem de perfil" />
        </div>

        <div className={styles.profileInfo}>
          <h1>Vinicius Bispo</h1>
          <span className={styles.profileRole}>Voluntário Ativo</span>

          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem
            transformar vidas e estou sempre em busca de novas oportunidades para ajudar.
          </p>

          <div className={styles.profileMeta}>
            <span>Salvador, BA</span>
            <span>vin.bispo@gmail.com</span>
            <span>Membro desde Janeiro 2022</span>
          </div>

          <div className={styles.profileTags}>
            <span>Educação</span>
            <span>Meio Ambiente</span>
            <span>Assistência Social</span>
            <span>Design</span>
          </div>
        </div>
      </article>
    </section>
  );
}
