import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';

function ProductInfo(): JSX.Element {
  const { idProduct } = useParams();

  console.log(idProduct);

  const products = useSelector((store: RootState) => store.products.products);
  const product = products.find((product) => product.id === Number(idProduct));
  // localStorage.setItem('product', JSON.stringify(product));

  // const productInfo((JSON.parse(localStorage.getItem('product'))));

  return (
    <div>
      {product && product.Images.map((image) => (
        <img src={image.src} />
      ))}
    </div>
  );
}

export default ProductInfo;
