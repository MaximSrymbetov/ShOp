import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductItem from './ProductItem';

function ProductsShoes(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const shoesProducts = products.filter((product) => product.category_id === 2);
  return (
    <div>{shoesProducts && shoesProducts.map((product) => <ProductItem product={product} />)}</div>
  );
}

export default ProductsShoes;
