import React from 'react';
import Greeting from './Greeting';
import CategoriesCards from './CategoriesCards';
import ProductsSwiper from './ProductsSwiper';

export default function MainPage(): JSX.Element {
  return (
    <div>
      <Greeting />
      <CategoriesCards />
      <ProductsSwiper />
    </div>
  );
}
