import React from 'react';
import { MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import './styles/cart.css';
import { useSelector } from 'react-redux';
import GoIcon from '../mainpage/icons/GoIcon';
import type { RootState } from '../../redux/store';

export default function Cart(): JSX.Element {
  const user = useSelector((store: RootState) => store);
  // const order = useSelector((store: RootState) =>
  //   store.orders.orders.find((ord) => ord.user_id === user?.id),
  // );
  console.log(user);

  return (
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
                        <Button href="/" className="text-body">
                          <div className="fas long-arrow-alt-left me-2">
                            <GoIcon />
                          </div>
                          Continue shopping
                        </Button>
                      </p>

                      <hr />
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p>
                            <span className="text-muted">Sort by:</span>
                            <a href="#!" className="text-body">
                              price
                              <MDBIcon fas icon="angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>

                      <Card className="mb-3">
                        <CardBody>
                          <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                              <div>
                                <Image
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                  className="rounded fluid"
                                  style={{ width: '65px' }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <p className="h5">Iphone 11 pro</p>
                                <p className="text-small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="flex flex-row items-center">
                              <div style={{ width: '50px' }}>
                                <p className="h5 fw-normal mb-0">2</p>
                              </div>
                              <div style={{ width: '80px' }}>
                                <p className="h5 mb-0">$900</p>
                              </div>
                              <a href="#!" style={{ color: '#cecece' }}>
                                <MDBIcon fas icon="trash-alt" />
                              </a>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </MDBCol>

                    <MDBCol lg="5">
                      <Card className="bg-primary text-black rounded-3">
                        <CardBody>
                          <div className="flex justify-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$4798.00</p>
                          </div>

                          <div className="flex justify-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="flex justify-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>

                          <Button color="default" size="lg" className="block">
                            <div className="flex justify-between">
                              <span>$4818.00</span>
                              <span>
                                Checkout <i className="fas fa-long-arrow-alt-right ms-2" />
                              </span>
                            </div>
                          </Button>
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
  );
}
