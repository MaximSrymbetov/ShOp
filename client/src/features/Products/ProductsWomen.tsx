import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductItem from './ProductItem';

function ProductsWoman(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const womanProducts = products.filter((product) => product.gender_id === 2);

  return (
    <div>{womanProducts && womanProducts.map((product) => <ProductItem product={product} />)}</div>
  );
}

export default ProductsWoman;
