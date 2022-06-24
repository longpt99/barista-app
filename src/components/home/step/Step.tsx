import styles from './styles.module.css';

export interface StepProps {}

export default function Operators(props: StepProps) {
  const contents = [
    {
      image: '/assets/images/home-1-icon-img-1.png',
      title: 'Coffeemaker',
      description:
        'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.',
    },
    {
      image: '/assets/images/home-1-icon-img-2.png',
      title: 'Coffee grinder',
      description:
        'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.',
    },
    {
      image: '/assets/images/home-1-icon-img-3.png',
      title: 'Coffee cups',
      description:
        'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.',
    },
    {
      image: '/assets/images/home-1-icon-img-4.png',
      title: 'Espresso machine',
      description:
        'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.',
    },
  ];
  return (
    <section>
      <div className={styles.wrapper}>
        {contents.map((item, index) => (
          <div className={styles.content}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
