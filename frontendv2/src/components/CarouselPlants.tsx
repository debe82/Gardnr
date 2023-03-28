import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IPlant } from "../interfaces";

export const CarouselPlants = () => {
  return (
    <>
      <h3>Let's take care of your plants!</h3>
      <div className="carousel-plants-container">
        <a href="#image1">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image2">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image3">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image4">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image5">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image6">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
      </div>
    </>
  );
};
