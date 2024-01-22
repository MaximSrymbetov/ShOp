import React from 'react';
import { Product } from './types/type';

function ProductItem({ image, product }: { image: string; product: Product }): JSX.Element {
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
