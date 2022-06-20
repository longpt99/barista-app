import classNames from 'classnames';
import styles from './styles.module.css';

export default function CarouselItem({ children, width }: any) {
  return (
    <div
      className={classNames(styles.carouselItem)}
      style={{ width: width, backgroundImage: `url(${children.image})` }}
    >
      <div className={styles.wrapper}>
        <img src={children.logo} />
        <div className={styles.content}>
          <h3>{children.title}</h3>
          <p>{children.description}</p>
        </div>
      </div>
    </div>
  );
}
