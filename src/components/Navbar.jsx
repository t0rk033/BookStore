import React, { useState } from "react";
import styles from "./navbar.module.css";
import { User, ShoppingCart, MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropDown(true);
  };

  const handleMouseLeave = () => {
    setShowDropDown(false);
  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navLinks}>
        <strong className={styles.logo}>Web BookStore</strong>
        <ul className={styles.navLinksUl}>
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li className={styles.drop} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a href="#">Categorias</a>
        <div className={`${styles.dropDownMenu} ${showDropDown ? styles.show : ''}`}>
          <Link to='/romance'>Romance</Link>
          <a href="#">Terror</a>
          <a href="#">Aventura</a>
        </div>
      </li>
      <li><a href="#">Promoções</a></li>
      <li><a href="#">Contato</a></li>
      <li><a href="#">Ajuda</a></li>
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
