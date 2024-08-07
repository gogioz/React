import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyrigth {new Date().getFullYear()} by Hager Fathi
      </p>
    </footer>
  );
}

export default Footer;
