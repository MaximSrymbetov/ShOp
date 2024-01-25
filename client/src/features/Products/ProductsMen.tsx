import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductItem from './ProductItem';
import './ProductsList.css';

function OnlyShoesProducts(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const manProducts = products.filter((product) => product.gender_id === 1);

  return (
    <div className="contain gap- grid grid-cols-1 sm:grid-cols-3">
      {manProducts && manProducts.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}

export default OnlyShoesProducts;
