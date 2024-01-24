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
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

export default function ProductsSwiper(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const FirstimageProduct = products
    .filter((product) => product.category_id === 2)
    .filter((prod, i) => i > 7);

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

        {FirstimageProduct &&
          FirstimageProduct.map((prod) => (
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
                    <b>shoes</b>
                    <p className="text-default-900">{`${prod.price} ₽`}</p>
                  </CardFooter>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
