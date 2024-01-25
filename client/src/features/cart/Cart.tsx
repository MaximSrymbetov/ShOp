import React, { useState } from 'react';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Button, Card, CardBody, Divider, Image, Spinner } from '@nextui-org/react';
import './styles/cart.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoIcon from '../mainpage/icons/GoIcon';
import { useAppDispatch, type RootState } from '../../redux/store';
import { deleteOrderItem } from '../AdminPanel/orderSlice';

export default function Cart(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [sumErr, setSumErr] = useState('');

  const loading = useSelector((store: RootState) => store.orders.loading);
  const orders = useSelector((store: RootState) => store.orders.orders);
  const user = useSelector((store: RootState) => store.auth.user);
  // console.log(orders);
  const userItems = orders.find(
    (order) => order.user_id === user?.id && order.status === 'created',
  )?.Order_items;
  console.log(userItems);
  const orderSum = userItems?.reduce((acc, item) => acc + +item.Product.price, 0);

  const handleDelete = (id: string): void => {
    if (id) {
      dispatch(deleteOrderItem(id)).catch((err) => console.error(err));
    }
  };

  const content = (
    <div>
      {user ? (
        <div>
          <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
              <div className="justify-center items-center h-100">
                <div>
                  <Card>
                    <CardBody className="p-4">
                      <MDBRow>
                        <MDBCol lg="7">
                          <p className="h5">
                            <Button onClick={() => navigate('/products')} className="text-body">
                              <div className="fas long-arrow-alt-left me-2">
                                <GoIcon />
                              </div>
                              Продолжить покупки
                            </Button>
                          </p>

                          <hr />
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <p className="mb-1">Корзина</p>
                              <p className="mb-0">
                                У вас {userItems ? userItems.length : 0} предмета в корзине
                              </p>
                            </div>
                            <div>
                              <p>
                                <span className="text-muted">Сортировать по:</span>
                                <a href="#!" className="text-body">
                                  <Button className="p-3 m-0 min-w-0 h-7">цена</Button>
                                </a>
                              </p>
                            </div>
                          </div>

                          <Card className="mb-3">
                            <CardBody>
                              {userItems?.length > 0 ? (
                                userItems?.map((item) => (
                                  <div key={item.id}>
                                    <div className="flex justify-between my-1">
                                      <div className="flex flex-row items-center">
                                        <div>
                                          <Image
                                            src={item.Product.Images[0].src}
                                            className="rounded fluid"
                                            style={{ width: '65px' }}
                                            alt="Shopping item"
                                          />
                                        </div>
                                        <div className="ms-3">
                                          <p className="text-md">{item.Product.name}</p>
                                          <p className="text-small mb-0 text-gray-300">
                                            {item.Product.description.slice(0, 25)}...
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-center">
                                        <div style={{ width: '50px' }}>
                                          <p className="fw-normal mb-0">{item.quantity}</p>
                                        </div>
                                        <div style={{ width: '80px' }}>
                                          <p className="mb-0">₽ {item.Product.price}</p>
                                        </div>
                                        <Button
                                          type="button"
                                          onClick={() => handleDelete(String(item.product_id))}
                                          style={{ color: '#cecece' }}
                                        >
                                          <img
                                            width="20"
                                            height="20"
                                            src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-trash-can-layout-for-a-indication-to-throw-trash-mall-regular-tal-revivo.png"
                                            alt="external-trash-can-layout-for-a-indication-to-throw-trash-mall-regular-tal-revivo"
                                          />
                                        </Button>
                                      </div>
                                    </div>
                                    <Divider />
                                  </div>
                                ))
                              ) : (
                                <p className="py-7">Ваша корзина пустая, добавьте в нее товары</p>
                              )}
                            </CardBody>
                          </Card>
                        </MDBCol>

                        <MDBCol lg="5">
                          <Card className="bg-primary text-black rounded-3">
                            <CardBody>
                              <div className="flex justify-between">
                                <p className="p-1">Сумма</p>
                                <p className="p-1">{orderSum} ₽</p>
                              </div>

                              <div className="flex justify-between">
                                <p className="p-1">Доставка</p>
                                <p className="p-1">+2000 ₽</p>
                              </div>

                              <div className="flex justify-between bg-zinc-100 rounded my-4">
                                <b className="p-1">Итого</b>
                                <b className="p-1">{orderSum ? orderSum + 2000 : 0} ₽</b>
                              </div>

                              <Button
                                color="default"
                                size="lg"
                                className="block"
                                onClick={() =>
                                  orderSum && orderSum > 0
                                    ? navigate('/order/pay')
                                    : setSumErr('Сначала добавьте заказы в корзину!')
                                }
                              >
                                <div className="flex justify-between">
                                  <span>{orderSum ? orderSum + 2000 : 0} ₽</span>
                                  <span>Оплатить</span>
                                </div>
                              </Button>
                              <p className="pt-4">{sumErr}</p>
                            </CardBody>
                          </Card>
                        </MDBCol>
                      </MDBRow>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col gap-4 my-24 w-4/5 sm:w-1/3">
          <div>
            <b>Вы не авторизированы.</b>
            <p>Зарегистрируйтесь или войдите, чтобы продолжить пользоваться корзиной</p>
          </div>
          <div className="flex gap-6 justify-between">
            <Button onClick={() => navigate('/login')} className="flex-1">
              Войти
            </Button>
            <Button onClick={() => navigate('/signin')} className="flex-1">
              Создать аккаунт
            </Button>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div>{loading ? <Spinner className="container mx-auto my-10" /> : <div>{content}</div>}</div>
  );
}
