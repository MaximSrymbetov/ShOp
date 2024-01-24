import React, { useRef } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addProducts } from '../Products/productSlice';


function AddProduct(): JSX.Element {
  const categoryidInput = useRef<HTMLInputElement>(null);
  const genderidInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const srcInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const productAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const categoryid = categoryidInput.current?.value;
    const genderid = genderidInput.current?.value;
    const name = nameInput.current?.value;
    const description = descriptionInput.current?.value;
    const price = priceInput.current?.value;
    const src = srcInput.current?.files;

    const formData = new FormData();

    formData.append('categoryid', categoryid);
    formData.append('genderid', genderid);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);

    for (let i = 0; i < src.length; i += 1) {
      formData.append('src', src[i]);
    }
    void dispatch(addProducts(formData));
    console.log(formData, '!!!!!!!!!!!!!!!!!!');

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };
  return (
    <div>
      <form onSubmit={productAdd}>
        <input name="categoryid" type="text" ref={categoryidInput} />
        <input name="genderid" type="text" ref={genderidInput} />
        <input name="name" type="text" ref={nameInput} />
        <input name="description" type="text" ref={descriptionInput} />
        <input name="price" type="text"  ref={priceInput} />
        <input name="src" type="file" multiple ref={srcInput} />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
export default AddProduct;

// function AddProduct(): JSX.Element {
//   const [categoryid, setCategoryid] = useState('');
//   const [genderid, setGenderid] = useState('');
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   const dispatch = useAppDispatch();

//   const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();

//     const data = {
//       category_id: +categoryid,
//       gender_id: +genderid,
//       name,
//       description,
//       price,
//     };
//     console.log(data);

//     dispatch(addProducts(data)).catch((err) => console.error(err));
//     setCategoryid('');
//     setGenderid('');
//     setName('');
//     setDescription('');
//     setPrice('');
//   };

//   return (
//     <form onSubmit={onHandleSubmit}>
//       <div className="field">
//         <input
//           type="text"
//           placeholder="categoryid"
//           value={categoryid}
//           onChange={(e) => setCategoryid(e.target.value)}
//         />
//       </div>
//       <div className="field">
//         <input
//           type="text"
//           placeholder="genderid"
//           value={genderid}
//           onChange={(e) => setGenderid(e.target.value)}
//         />
//       </div>
//       <div className="field">
//         <input
//           type="text"
//           placeholder="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="field">
//         <input
//           type="text"
//           placeholder="description"
//           className="textarea"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div className="field">
//         <input
//           type="text"
//           placeholder="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//       </div>

//       <button type="submit">Отправить</button>
//     </form>
//   );
// }

// export default AddProduct;
