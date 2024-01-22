/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

import ProductItem from './ProductItem';

function Allroducts(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const [value, setValue] = useState('');
  const filterProducts = products.filter((product) => product.name.toLowerCase().includes(value));

  return (
    <div>
      <form>
        <input type="text" placeholder="ывводи" onChange={(e) => setValue(e.target.value)} />
      </form>
      <div>
        {filterProducts.map((product) =>
          product.Images.map((image) => <ProductItem image={image} product={product} />),
        )}
      </div>
    </div>
  );
}

export default Allroducts;
