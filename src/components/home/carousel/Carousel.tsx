import classNames from 'classnames';
import styles from './styles.module.css';

export default function Carousel() {
  const contents = [
    {
      title: 'Importance of coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img.png',
    },
    {
      title: 'Special coffee beans',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-2.png',
    },
    {
      title: 'The home of coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-3.png',
    },
    {
      title: 'Brewed to perfection',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-4.png',
    },
  ];
  return (
    <section>
      <div id="carousel" className={classNames(styles.carousel)}>
        <ol className={styles.viewpoint}>
          {contents.map((item, index) => (
            <li key={index} className={styles.slide}>
              <div className={styles.wrapper}>
                <img src={item.logo} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
              </div>
            </li>
          ))}

          <span className="prev"></span>
          <span className="next"></span>
        </ol>
      </div>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1" className="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2" className="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3" className="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide4" className="carousel__navigation-button">
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
}
