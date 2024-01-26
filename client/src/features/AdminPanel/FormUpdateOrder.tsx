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
      className="container mx-auto flex justify-center min-w 1/3"
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
        </table>
        <div className="container mx-auto py-12 px-4">
          <div className="bg-white mx-auto p-6 rounded-xl">
            <div>
              <div className="px-4 lg:px-0">
                <h1 className="text-base font-semibold leading-7 text-gray-900">tournament.name</h1>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  tournament.description
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Статус:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      tournament.status
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Количество участников:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      8
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Формат:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      2x2
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Организатор:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      Юрий
                    </dd>
                  </div>
                  <div className="px-4 py-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Приз:</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 lg:col-span-2 lg:mt-0">
                      Значок Elbrus Bootcamp
                    </dd>
                  </div>

                  {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul
                      role="list"
                      className="divide-y divide-gray-100 rounded-md border border-gray-200"
                    >
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              resume_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              coverletter_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div> */}
                </dl>
              </div>
            </div>
          </div>
        </div>
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
