import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://medium.com/@gokhanekici" target="_blank">
        Gökhan Ekici
      </Link>
    </footer>
  );
};

export default Footer;
