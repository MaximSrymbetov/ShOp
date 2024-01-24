import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { RootState } from '../../redux/store';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles/styles.css';

function ProductInfo(): JSX.Element {
  const { idProduct } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const products = useSelector((store: RootState) => store.products.products);
  const product = products.find((produc) => produc.id === Number(idProduct));

  return (
    <div className="boxitem">
      <Swiper
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product &&
          product.Images.map((image) => (
            <SwiperSlide className="swiperbox">
              <img src={image.src} alt="img" />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product &&
          product.Images.map((image) => (
            <SwiperSlide>
              <img src={image.src} alt="img" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductInfo;
// {product &&
//   product.Images.map((image) => (
//     <SwiperSlide>
//       <img src={image.src} alt="img" />
//     </SwiperSlide>
//   ))}
