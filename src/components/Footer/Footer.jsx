import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>

          <div className={styles.footerLogo}>
            <img src={logo} alt="Logo da Connect" />

            <h3>Connect</h3>

          </div>

          <div className={styles.footerInfo}> 
            <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
          </div>

          <div className={styles.footerSocial}>
            <img src={whatsapp} alt="Ícone do WhatsApp" />
            <img src={instagram} alt="Ícone do instagram" />
            <img src={linkedin} alt="Ícone do linkedin" />
          </div>

        </div>


      </div>
    </footer>
  );
}
