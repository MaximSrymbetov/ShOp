import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

function Allroducts(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  console.log(products);

  return <div>{products.map(product => <p>{product.name}</p>)}</div>;
}

export default Allroducts;
