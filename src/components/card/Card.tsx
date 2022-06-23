import styles from './styles.module.css';

export interface CardProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>
          <span>{props.number}</span> {props.title}
        </h3>
        <p>{props.description}</p>
      </div>
      <a className={styles.btn} href="#0">
        Read more &#8594;
      </a>
    </div>
  );
}
