import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import userIcon from "../../../public/assets/icons/user.svg";
import cartIcon from "../../../public/assets/icons/cart.svg";
import homeIcon from "../../../public/assets/icons/home.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <a href="/">Речицкий метизный завод</a>
      </h1>
      <div className={styles.headerMenu}>
        <nav className={styles.navigation} aria-label="Главное меню">
          <ul>
            <li>
              <a href="/catalog">КАТАЛОГ</a>
            </li>
            <li>
              <Link to="/about">О КОМПАНИИ</Link>
            </li>
            <li>
              <a href="/">КАК КУПИТЬ</a>
            </li>
            <li>
              <a href="/">ДОСТАВКА</a>
            </li>
            <li>
              <a href="/">ГДЕ КУПИТЬ</a>
            </li>
            <li>
              <Link to="/contacts">КОНТАКТЫ</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <a href="/user">
            <img src={userIcon} alt="Личный кабинет" />
          </a>
          <a href="/cart">
            <img src={cartIcon} alt="Корзина" />
          </a>
          <a href="/user">
            <img src={homeIcon} alt="Корпоративный сайт" />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
