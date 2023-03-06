import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://i.imgur.com/UNmsjGS.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://i.imgur.com/qCx0LTO.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://i.imgur.com/mzfLfzr.jpeg" onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Carousel;