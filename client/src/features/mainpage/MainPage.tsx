import React from 'react';
import ProductsCards from './ProductsCards';
import Greeting from './Greeting';

export default function MainPage(): JSX.Element {
  return (
    <div>
      <Greeting />
      <ProductsCards />
    </div>
  );
}
