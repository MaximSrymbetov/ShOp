import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

const productImg = [
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31b6d072-9844-4553-bd5d-92beed6038e1/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png',
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a29e064-1eb0-4d50-b821-152c32ae4141/air-jordan-1-mid-se-mens-shoes-x2p05n.png',
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/91459573-a7ac-4438-b46d-87aadaf40d19/air-jordan-1-low-se-womens-shoes-pTFmdP.png',
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7751fa36-5bd1-42d9-b661-6f9b68def178/air-jordan-1-elevate-low-womens-shoes-x3Qq8C.png',
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae916130-378d-440e-86c5-56397c1d4dc9/air-jordan-1-brooklyn-womens-boots-kd9QhX.png',
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7231a782-35fb-4bce-b940-04748c42914c/air-jordan-1-mid-se-big-kids-shoes-rVNnwL.png',
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea13c1df-716a-4799-81c6-1a2da6785060/air-jordan-1-mid-big-kids-shoes-H5qqbF.png',
];

export default function ProductsSwiper(): JSX.Element {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3}
        centeredSlides
        spaceBetween={5}
        pagination={{
          type: 'fraction',
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="w-screen height-full sm:w-4/5 "
        freeMode
        loop
        preventClicks
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {productImg.map((prod, index) => (
          <SwiperSlide>
            <Link to={`/products/${index}`}>
              <Card>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    height="100%"
                    width="100%"
                    alt="undefined"
                    className="w-full object-cover h-[140px]"
                    src={prod}
                  />
                </CardBody>
                <CardFooter className="w-100% text-xs text-nowrap p-1 gap-1 justify-between sm:text-small sm:p-3">
                  <b>Shoes</b>
                  <p className="text-default-900">{`${Math.floor(Math.random() * 100000)} ₽`}</p>
                </CardFooter>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
