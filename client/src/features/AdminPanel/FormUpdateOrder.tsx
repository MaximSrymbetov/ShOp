/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppDispatch, type RootState } from '../../redux/store';
import './Add.css';
import { updateOrder } from './orderSlice';

import type { Order } from './types/type';

function FormUpdateOrder(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  const orders = useSelector((store: RootState) => store.orders.orders);
  const dispatch = useAppDispatch();
  let order: Order | undefined;
  if (id) {
    order = orders.find((oreder) => oreder.id === +id);
  }

  const { register, handleSubmit } = useForm({
    defaultValues: { status: order?.status, total: order?.total },
  });

  const onSubmit = (data: { total: string | undefined; status: string | undefined }): void => {
    dispatch(updateOrder({ ...order, total: data.total, status: data.status })).catch((err) =>
      console.error(err),
    );
    navigate('/orderTable');
  };
  console.log(order?.Order_info);

  return (
    <div className="container mx-auto flex justify-center min-w 1/3">
      <form onSubmit={handleSubmit(onSubmit)} className="iii">
        <p className="textfieldlabel">ВЫБЕРИТЕ СТАТУС:</p>
        <select defaultValue={order?.status} {...register('status')}>
          <option className="checkbox" value="created">
            Создан
          </option>
          <option className="checkbox" value="confirmed">
            Ожидает оплаты
          </option>
          <option className="checkbox" value="payed">
            Оплачен
          </option>
          <option className="checkbox" value="delivery">
            Доставка
          </option>
          <option className="checkbox" value="closed">
            Закрыт
          </option>
        </select>

        <div className="container mx-auto flex justify-center min-w 1/3">
          <p className="text-field__label">СУММА:</p>
        </div>
        <input
          type="text"
          className="text-field__input"
          defaultValue={order?.total}
          required
          {...register('total')}
        />

        <button className="button-arounder" type="submit">
          Изменить
        </button>
        <p>Информация о заказе :</p>
        <table style={{ border: '2px solid black', padding: '10px' }}>
          <tbody>
            <tr>
              <th style={{ color: 'red', fontWeight: 'bold', padding: '10px' }}>ИМЯ КЛИЕНТА:</th>
              <td
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  padding: '10px',
                  border: '2px solid black',
                }}
              >
                {order?.User.name}
              </td>

              <th style={{ color: 'red', fontWeight: 'bold', padding: '10px' }}>ПОЧТА:</th>
              <td
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  padding: '10px',
                  border: '2px solid black',
                }}
              >
                {order?.User.email}
              </td>

              <th style={{ color: 'red', fontWeight: 'bold', padding: '10px' }}>АДРЕС:</th>
              <td
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  padding: '10px',
                  border: '2px solid black',
                }}
              >
                {order?.Order_info.address}
              </td>
              <th style={{ color: 'red', fontWeight: 'bold', padding: '10px' }}>ТЕЛЕФОН:</th>
              <td
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  padding: '10px',
                  border: '2px solid black',
                }}
              >
                {order?.Order_info.phone}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="buttons-container">
        <button className="button-arounder" type="button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default FormUpdateOrder;
