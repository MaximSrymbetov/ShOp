import React, { useState } from 'react';

import { updateProduct } from '../Products/productSlice';
import { useAppDispatch } from '../../redux/store';
import type { Product } from '../Products/types/type';
import { Button } from '@nextui-org/react';

type TypeProps = {
  product: Product;
};

function FormUpdateProduct({ product }: TypeProps): JSX.Element {
  const [name, setName] = useState(product?.name);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);
  const dispatch = useAppDispatch();

  const productUpdate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, name, description, price })).catch(err => console.log(err))
  };

  return (
    <form onSubmit={productUpdate}>
      <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input
        name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input name="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <Button className="save" type="submit" style={{ fontSize: '14px'}}>
        меняем
      </Button>
 
    </form>
  );
}

export default FormUpdateProduct;

// function FormUpdateProduct(): JSX.Element {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const products = useSelector((store: RootState) => store.products.products);
//   const dispatch = useAppDispatch();
//   let product;
//   if (id) {
//     product = products.find((produt) => produt.id === +id);
//   }
//   const [name, setName] = useState(product?.name || '');
//   const [description, setDescription] = useState(product?.description || '');
//   const [price, setPrice] = useState(product?.price || '');

//   const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     dispatch(updateProduct({ ...product, name, description, price }));
//     navigate(-1);
//   };

//   return (
//     <form onSubmit={onHadleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
//       <button type="submit">Изменить</button>
//     </form>
//   );
// }

// export default FormUpdateProduct;
