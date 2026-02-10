import styles from './Actions.module.scss';
import placeholderImage from '../../assets/imagemInicial.png';

const actionItems = [
  {
    title: 'Mutirão de reciclagem',
    description:
      'Coletar materiais recicláveis e orientar sobre descarte consciente.',
    callToAction: 'Quero participar',
  },
  {
    title: 'Aulas de Tecnologia',
    description:
      'Ensinar noções básicas de informática, internet segura e programação.',
    callToAction: 'Quero participar',
  },
  {
    title: 'Esporte e Inclusão',
    description:
      'Organizar treinos e jogos que incentivam a participação de todos.',
    callToAction: 'Quero participar',
  },
  {
    title: 'Instituto Grande Família',
    description:
      'Contribua com alimentos não perecíveis e apoio a famílias vulneráveis.',
    callToAction: 'Quero Doar',
  },
  {
    title: 'Projeto Futuro na Escola',
    description:
      'Doe livros, cadernos e materiais para incentivar os estudos.',
    callToAction: 'Quero Doar',
  },
  {
    title: 'Instituto Conecta Jovem',
    description:
      'Doe computadores e tablets em bom estado para inclusão digital.',
    callToAction: 'Quero Doar',
  },
];

export default function Actions() {
  return (
    <section className={styles.actionsContainer}>
      <header className={styles.hero}>
        <h1>Ações da Connect</h1>
        <p>
          Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas
          através de ações sociais que geram impacto real nas comunidades.
        </p>
      </header>

      <div className={styles.grid}>
        {actionItems.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={placeholderImage} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button type="button">{item.callToAction}</button>
          </article>
        ))}
      </div>
    </section>
  );
}
