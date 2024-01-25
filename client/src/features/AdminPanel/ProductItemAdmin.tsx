import React from 'react';
import { useAppDispatch } from '../../redux/store';
import type { Product, ProductId } from '../Products/types/type';
import { deleteProduct } from '../Products/productSlice';

type ProductItemProps = {
  product: Product;
};

function ProductItemAdmin({ product }: ProductItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleDeleteProduct = async (id: ProductId): Promise<void> => {
    dispatch(deleteProduct(id));
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
              <button
                style={{ backgroundColor: 'red', fontSize: '18px' }}
                className="button-arounder"
                type="button"
                onClick={() => onHandleDeleteProduct(product.id)}
              >
                УДАЛИТЬ
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductItemAdmin;
