import styles from './Home.module.scss';
import imagemInicial from '../../assets/imagemInicial.png';

export default function Home() {
    return (
        <section className={styles.homeContainer}>

            <main className={styles.heroSection}>
                <div className={styles.heroInfo}>
                    <h1>Projetos Sociais que transformam</h1>

                    <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
                </div>

                <div className={styles.heroImage}>
                    <img src={imagemInicial} alt="Imagem de destaque" />
                </div>
            </main>
            
        </section>
    )
}
