import styles from './styles.module.css';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header>
      <section className={styles.header}>
        <div className={styles.leftSide}>
          <a href="">
            <img src="/assets/images/logo-2.png" alt="" />
          </a>
        </div>
        <div className={styles.rightSide}>
          <div>
            <nav>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <a href="#">Home</a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#">Menu</a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#">Reservation</a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#">Pages</a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#">Blog</a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <img
              src="/assets/fonts/svgs/regular/search.svg"
              alt="search_icon"
              className={styles.icon}
            />
          </div>
          <div>
            <img
              src="/assets/fonts/svgs/regular/shopping-cart.svg"
              alt="cart_icon"
              className={styles.icon}
            />
          </div>
        </div>
      </section>
    </header>
  );
}
