/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

import ProductItem from './ProductItem';

function Allroducts(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const [info, setInfo] = useState('')
  const [value, setValue] = useState('');
  console.log(info);
  const searchProducts = products.filter((product) => product.name.toLowerCase().includes(value));

  return (
    <div>
      <select value={info} onChange={(e) => setInfo(e.target.value)}>
        <option value="T-shirt">Футболки</option>
        <option value="air">Кроссовки</option>
        <option value="Jacket">Куртки</option>
      </select>
      <form>
        <input type="text" placeholder="ывводи" onChange={(e) => setValue(e.target.value)} />
      </form>
      <div>
        {searchProducts.map((product) =>
          product.Images.map((image) => <ProductItem image={image} product={product} />),
        )}
      </div>
    </div>
  );
}

export default Allroducts;
