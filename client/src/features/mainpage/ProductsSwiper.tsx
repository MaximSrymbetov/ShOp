/* eslint-disable prefer-template */
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
import { Card, CardBody, CardFooter, Image, Spinner } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

export default function ProductsSwiper(): JSX.Element {
  const loading = useSelector((store: RootState) => store.products.loading);
  const products = useSelector((store: RootState) => store.products.products);
  const sneakers = products.filter((product) => product.category_id === 2).slice(3, 10);

  const content = (
    <div className="swiper-container pb-12">
      <Swiper
        slidesPerView={3}
        centeredSlides
        spaceBetween={5}
        pagination={{
          type: 'fraction',
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="w-screen height-full pt-5 "
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
        {sneakers &&
          sneakers.map((prod) => (
            <SwiperSlide>
              <Link to={`/product/${prod.id}`}>
                <Card>
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="sm"
                      radius="lg"
                      height="100%"
                      width="100%"
                      alt="undefined"
                      className="w-full object-cover h-[140px]"
                      src={prod.Images[0].src}
                    />
                  </CardBody>
                  <CardFooter className="w-100% text-xs text-nowrap p-1 gap-1 justify-between sm:text-small sm:p-3">
                    <b>{prod.name.length > 6 ? prod.name.substring(0, 20) + '...' : prod.name}</b>
                    <p className="text-default-900">{`${prod.price} ₽`}</p>
                  </CardFooter>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
  return <div>{loading ? <Spinner className="container mx-auto" /> : <div>{content}</div>}</div>;
}
