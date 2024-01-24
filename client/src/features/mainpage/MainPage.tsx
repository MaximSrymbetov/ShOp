import React from 'react';
import Greeting from './Greeting';
import CategoriesCards from './CategoriesCards';
import ProductsSwiper from './ProductsSwiper';
import Footer from '../footer/Footer';

export default function MainPage(): JSX.Element {
  return (
    <div>
      <Greeting />
      <CategoriesCards />
      <ProductsSwiper />
    </div>
  );
}
