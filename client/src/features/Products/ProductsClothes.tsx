import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductItem from './ProductItem';

function ProductsClothes(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const clothesProducts = products.filter((product) => product.category_id === 1);
  return (
    <div>
      {clothesProducts && clothesProducts.map((product) => <ProductItem product={product} />)}
    </div>
  );
}

export default ProductsClothes;
