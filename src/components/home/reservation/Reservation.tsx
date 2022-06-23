import Card from '../../card/Card';
import styles from './styles.module.css';

export interface IReservationProps {}

export default function Reservation(props: IReservationProps) {
  const contents = [
    {
      title: 'Beautiful place',
      description:
        'Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.',
      image: '/assets/images/h-1-img-1.jpg',
      number: '01',
    },
    {
      title: 'Feel the coffee',
      description:
        'Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.',
      image: '/assets/images/h-1-img-2.jpg',
      number: '02',
    },
    {
      title: 'Full taste',
      description:
        'Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.',
      image: '/assets/images/h-1-img-3.jpg',
      number: '03',
    },
  ];
  return (
    <section className={styles.container}>
      <p>What Happens Here</p>
      <h2>Coffee build your base.</h2>
      <div className={styles.cardList}>
        {contents.map((data, index) => (
          <Card
            description={data.description}
            title={data.title}
            image={data.image}
            number={data.number}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
