import { Fragment } from 'react';
import CarouselItem from '../components/carousel-item/CarouselItem';
import Carousel from '../components/carousel/Carousel';
import Header from '../components/common/header/Header';
import Application from '../components/home/application/Application';
import Reservation from '../components/home/reservation/Reservation';
import Operators from '../components/home/step/Step';

export default function HomePage() {
  const contents = [
    {
      title: 'Importance of coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img.png',
      image: '/assets/images/home-1-slider.jpg',
    },
    {
      title: 'Special coffee beans',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-2.png',
      image: '/assets/images/home-1-slider-img-2.jpg',
    },
    {
      title: 'Brewed to perfection',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-4.png',
      image: '/assets/images/home-1-slider-4.jpg',
    },
    {
      title: 'The home of coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo in officia molestias, ipsa culpa corporis iusto?',
      logo: '/assets/images/home-1-slider-img-2.png',
      image: '/assets/images/main.jpg',
    },
  ];

  return (
    <Fragment>
      <Header />
      <Carousel>
        {contents.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </Carousel>
      <Reservation />
      <Application />
      <Operators />
    </Fragment>
  );
}
