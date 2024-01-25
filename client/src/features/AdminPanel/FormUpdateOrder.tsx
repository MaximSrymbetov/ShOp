/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

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
  console.log(order);

  const { register, handleSubmit } = useForm({
    defaultValues: { status: order?.status, total: order?.total },
  });


  const onSubmit = (data: { total: string | undefined; status: string | undefined }): void => {
    const newOrder = { ...order, id: Number(order?.id), total: data.total, status: data.status };
    console.log(newOrder);
    if(!newOrder){
      return
    }
    dispatch(updateOrder(newOrder)).catch((err) => console.error(err));
    navigate('/orderTable');
  };

  console.log(order?.Order_info);

  return (
    <div className="container mx-auto flex justify-center min-w 1/3">
      <form onSubmit={handleSubmit(onSubmit)} className="iii">

        <label className="text-field__label">ВЫБЕРИТЕ СТАТУС:</label>
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
          <label className="text-field__label">СУММА:</label>{' '}
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

        <h2 style={{ color: 'red', fontWeight: 'Ultra Bold ' }}>{order?.Order_info.address}</h2>

        <p>{order?.Order_info.phone}</p>
      </form>
    </div>
  );
}

export default FormUpdateOrder;
