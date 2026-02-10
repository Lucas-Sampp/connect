import styles from "./NavBar.module.scss";
import logo from "../../assets/logo.png";
import fotologin from "../../assets/fotologin.png";

export default function NavBar() {
  return (
    <header className={styles.navbarContainer}>
      <div className={styles.navbarSection}>
        <img className={styles.logo} src={logo} alt="Logo da Connect" />

        <nav className={styles.navbarInfo}>
          <a href="/">Início</a>
          <a href="/acoes">Ações da Connect</a>
          <a href="/quem-somos">Quem Somos</a>
        </nav>

        <img className={styles.avatar} src={fotologin} alt="Foto de login" />
      </div>
    </header>
  );
}
