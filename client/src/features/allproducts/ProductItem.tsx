import React from 'react';
import type { Product } from './types/type';

type ProductItemProps = {
  image: { src: string };
  product: Product;
};

function ProductItem({ image, product }: ProductItemProps): JSX.Element {
  return (
    <div className="boxItem">
      <div>
        <img src={image.src} alt="" />
        <p>{product.name}</p>
      </div>
    </div>
  );
}

export default ProductItem;
