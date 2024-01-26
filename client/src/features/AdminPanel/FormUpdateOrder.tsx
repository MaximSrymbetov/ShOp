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
import { Button } from '@nextui-org/react';

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
    if (!newOrder) {
      return;
    }
    dispatch(updateOrder(newOrder)).catch((err) => console.error(err));
    navigate('/orderTable');
  };

  console.log(order?.Order_info);

  return (
    <div
      className="container mx-auto flex flex-col justify-center min-w-full "
      style={{ backgroundColor: '#eee' }}
    >
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

  


        <div className="container mx-auto flex justify-center  ">
          <p className="text-field__label">СУММА:</p>
        </div>
        <input
          type="text"
          className="text-field__input"
          defaultValue={order?.total}
          required
          {...register('total')}
        />
        <div className="container mx-auto flex justify-center py-4 ">
        <Button className="button-arounder" type="submit">
          Изменить
        </Button>
        </div>
      
        {/* <table style={{ border: '2px solid black', padding: '10px' }}>
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
                {order?.Order_info && order?.Order_info.address}
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
                {order?.Order_info && order?.Order_info.phone}
              </td>
            </tr>
          </tbody>
        </table> */}
       
      </form> 
      <div className="container mx-auto py-2 px-4 w-2/3">
          <div className="bg-white mx-auto p-6 rounded-xl">
            <div>
              <div className="container mx-auto flex justify-center min-w 1/3 ">
                <h1 className="py-1 text-base font-semibold leading-7 text-gray-900">Заказчик:</h1>
              </div>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Подробная информация о клиенте
              </p>

              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">ИМЯ КЛИЕНТА:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      {order?.User.name}
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">ПОЧТА:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      {order?.User.email}
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">АДРЕС:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      {order?.Order_info && order?.Order_info.address}
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">ТЕЛЕФОН:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      {order?.Order_info && order?.Order_info.phone}
                    </dd>
                  </div>
              
                </dl>
              </div>
            </div>
          </div>
        </div>
      <div className="buttons-container">
        <Button className="button-arounder" type="button" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
    </div>
  );
}

export default FormUpdateOrder;
