import React from 'react';

function ProductItem({ image, product }): JSX.Element {
  console.log(image);

  return (
    <div className="boxItem">
      <div>
        <img src={image.src} alt="" />
        <p>{product.name}</p>
      </div>
    </div>
  );
}

export default ProductItem;
