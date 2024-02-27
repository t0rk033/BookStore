import React from "react";
import styles from "./navbar.module.css";
import { User, ShoppingCart, MagnifyingGlass } from "phosphor-react";

function Navbar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navLinks}>
        <strong className={styles.logo}>Web BookStore</strong>
        <ul className={styles.navLinksUl}>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Promoções</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Home</a></li>
            
        </ul>
        <div className={styles.acess}>
        <input type="text" name="search" className={styles.search} />
        <MagnifyingGlass size={32} className={styles.searchIcon} />
        <a href="#">{<User size={32} />}</a>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
