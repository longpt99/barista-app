import Button from '../../button/Button';
import styles from './styles.module.css';

export interface ApplicationProps {}

export default function Application(props: ApplicationProps) {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.image}>
            <img src="/assets/images/home-1-img-6.png" alt="" />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            <h4>Application</h4>
            <h3>Use our application.</h3>
            <p>
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
              nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei
              est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
              tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.
              Mea facilisis urbanitas moderatius.
            </p>
            <Button link="#">Read more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
