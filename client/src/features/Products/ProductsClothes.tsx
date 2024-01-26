import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductItem from './ProductItem';

function ProductsClothes(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const clothesProducts = products.filter((product) => product.category_id === 1);
  return (
    <div className="py-16 px-10" style={{ backgroundColor: '#eee' }}>
      <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-3 flex justify-center p-0 m-0">
        {clothesProducts && clothesProducts.map((product) => <ProductItem product={product} />)}
      </div>
    </div>
  );
}

export default ProductsClothes;
