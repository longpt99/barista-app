import styles from './styles.module.css';

export interface IButtonProps {
  children: string;
  link?: string;
}

export default function Button({ link, children }: IButtonProps) {
  return link ? (
    <a className={styles.btn} href={link}>
      {children}
    </a>
  ) : (
    <button className={styles.btn}>{children}</button>
  );
}
