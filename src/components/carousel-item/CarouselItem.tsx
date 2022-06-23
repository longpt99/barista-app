import classNames from 'classnames';
import Button from '../button/Button';
import styles from './styles.module.css';

export default function CarouselItem({ children, width, display }: any) {
  return (
    <div
      className={classNames(styles.carouselItem)}
      style={{
        backgroundImage: `url(${children.image})`,
        display: display,
      }}
    >
      <div className={styles.wrapper}>
        <img src={children.logo} alt={children.title} />
        <div className={styles.content}>
          <h3>{children.title}</h3>
          <p>{children.description}</p>
        </div>
        <Button link="#">Read more</Button>
      </div>
    </div>
  );
}
