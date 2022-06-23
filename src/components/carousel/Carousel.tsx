import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export interface ICarouselProps {
  children: any;
}

export default function Carousel({ children }: ICarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (index: number) => {
    if (index < 0) {
      index = React.Children.count(children) - 1;
    } else if (index >= React.Children.count(children)) {
      index = 0;
    }
    setActiveIndex(index);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 3000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  return (
    <div className={styles.carousel}>
      <div className={styles.inner}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            display: activeIndex === index ? 'inline-flex' : 'none',
          });
        })}
      </div>
      <div className={styles.direction}>
        <a
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          href="#0"
        >
          <img
            src="/assets/fonts/svgs/light/arrow-left.svg"
            alt="arrow_left"
            className={styles.directionIcon}
          />
        </a>
        <a
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          href="#0"
        >
          <img
            src="/assets/fonts/svgs/light/arrow-right.svg"
            alt="arrow_right"
            className={styles.directionIcon}
          />
        </a>
      </div>
      <div className={styles.indicators}>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              style={{ backgroundColor: activeIndex === index ? '#fff' : '' }}
              onClick={() => updateIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
