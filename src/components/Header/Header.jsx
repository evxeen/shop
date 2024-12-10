import styles from "./Header.module.scss";
import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/cart.svg";
import homeIcon from "../../assets/icons/home.svg";

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
              <a href="/about">КАТАЛОГ</a>
            </li>
            <li>
              <a href="/products">О КОМПАНИИ</a>
            </li>
            <li>
              <a href="/services">КАК КУПИТЬ</a>
            </li>
            <li>
              <a href="/contacts">ДОСТАВКА</a>
            </li>
            <li>
              <a href="/contacts">ГДЕ КУПИТЬ</a>
            </li>
            <li>
              <a href="/contacts">КОНТАКТЫ</a>
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
    </div>
  );
};

export default Header;
