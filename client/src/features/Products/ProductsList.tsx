/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import type { RootState } from '../../redux/store';

import ProductItem from './ProductItem';

import './ProductsList.css';

function Allroducts(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const [info, setInfo] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(info);
  }, [info]);

  const searchProducts = products.filter((product) => product.name.toLowerCase().includes(value));

  return (
    <div>
      {/* <CheckboxGroup label="Filter" value={info} onValueChange={setInfo}>
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="san-francisco">San Francisco</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </CheckboxGroup>
      {/* <select value={info} onChange={(e) => setInfo(e.target.value)}>
      
        <option className="checkbox" value="air">
          Кроссовки
        </option>
        <option className="checkbox" value="Jacket">
          Куртки
        </option>
      </select> */}
      {/* <form>
          <input type="text" placeholder="ывводи" onChange={(e) => setValue(e.target.value)} />
        </form> */}

      <div className="contain gap- grid grid-cols-1 sm:grid-cols-3">
        {searchProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Allroducts;

// return (
//   <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
//     {searchProducts.map((product, index) => (
//       <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
//         <CardBody className="overflow-visible p-0">
//           <Image
//             shadow="sm"
//             radius="lg"
//             width="100%"
//             alt={item.title}
//             className="w-full object-cover h-[140px]"
//             src={item.img}
//           />
//         </CardBody>
//         <CardFooter className="text-small justify-between">
//           <b>{item.title}</b>
//           <p className="text-default-500">{item.price}</p>
//         </CardFooter>
//       </Card>
//     ))}
//   </div>
// );
