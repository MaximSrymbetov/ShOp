import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addProducts } from '../Products/productSlice';

function AddProduct(): JSX.Element {
  const [categoryid, setCategoryid] = useState('');
  const [genderid, setGenderid] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // const formData=new FormData()
    // formData.append('categoryid', categoryid);
    // formData.append('genderid', genderid);
    // formData.append('name', name);
    // formData.append('description', description);
    // formData.append('price', price);
    const data = {
      category_id: +categoryid,
      gender_id: +genderid,
      name,
      description,
      price,
    };
    console.log(data);

    dispatch(addProducts(data)).catch((err) => console.error(err));
    setCategoryid('');
    setGenderid('');
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="field">
        <input
          type="text"
          placeholder="categoryid"
          value={categoryid}
          onChange={(e) => setCategoryid(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="genderid"
          value={genderid}
          onChange={(e) => setGenderid(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="description"
          className="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}

export default AddProduct;
