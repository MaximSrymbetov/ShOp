import React from 'react';
import { useAppDispatch } from '../../redux/store';
import type { Product, ProductId } from '../Products/types/type';
import { deleteProduct } from '../Products/productSlice';
import FormUpdateProduct from './Udete';
import { Button } from '@nextui-org/react';


type ProductItemProps = {
  product: Product;
};

function ProductItemAdmin({ product }: ProductItemProps): JSX.Element {
  const dispatch = useAppDispatch();


  const onHandleDeleteProduct = (id: ProductId): void => {
    dispatch(deleteProduct(id)).catch((err) => console.log(err));
  };

  return (
    <div
      className="list"
      style={{ padding: '10px', border: '2px solid #ccc', borderRadius: '5px' }}
    >
      <table style={{ width: '100%', fontSize: '22px' }}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>{product.name}</td>
            <td style={{ textAlign: 'right' }}>
              <Button
                style={{ color:'white', backgroundColor: 'red', fontSize: '15px' }}
                className="button-arounder"
                type="button"
                onClick={() => onHandleDeleteProduct(product.id)}
              >
                УДАЛИТЬ
              </Button>
             
            </td>
          </tr>
        </tbody>
      </table>
       <FormUpdateProduct product={product}/>
    </div>
  );
}

export default ProductItemAdmin;
