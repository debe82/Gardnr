import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const CarouselPlants = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

  return (
    <>
    <div>Carousel</div>
    <Carousel responsive={responsive}>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
      <div><img src="https://picsum.photos/100/100" alt="" /></div>
    </Carousel>
    </>
  )
}
