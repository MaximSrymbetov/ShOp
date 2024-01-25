import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductItem from './ProductItem';

import './styles/ProductsList.css';


function ProductsAccessories(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const AccessoriesProducts = products.filter((product) => product.category_id === 3);
  return (
    <div className="contain gap- grid grid-cols-1 sm:grid-cols-3">
      {AccessoriesProducts &&
        AccessoriesProducts.map((product) => <ProductItem product={product} />)}
    </div>
  );
}

export default ProductsAccessories;
