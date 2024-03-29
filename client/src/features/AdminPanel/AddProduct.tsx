/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-restricted-syntax */
import React, { useRef, useState } from 'react';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useAppDispatch } from '../../redux/store';
import { addProducts } from '../Products/productSlice';
import './Add.css';

function AddProduct(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);
  const categoryidInput = useRef<HTMLSelectElement>(null);
  const genderidInput = useRef<HTMLSelectElement>(null);
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

    if (!categoryid || !genderid || !name || !description || !price || !src) {
      return;
    }

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
    formRef.current?.reset();
  };

  return (
    <>
      <Button
        className=" mx-auto flex justify-center w-1/3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Добавить новый товар
      </Button>
      {isOpen && (
        <div className="container mx-auto flex justify-center w-2/3">
          <form onSubmit={productAdd} ref={formRef}>
            <Select
              className="py-1"
              name="categoryid"
              placeholder="Категория"
              required
              ref={categoryidInput}
            >
              <SelectItem key={1} value="1">
                Одежда
              </SelectItem>
              <SelectItem key={2} value="2">
                Кроссовки
              </SelectItem>
              <SelectItem key={3} value="3">
                Акссесуары
              </SelectItem>
            </Select>
            <Select className="py-1" name="genderid" placeholder="Пол" required ref={genderidInput}>
              <SelectItem key={1} value="1">
                Мужчина
              </SelectItem>
              <SelectItem key={2} value="2">
                Женщина
              </SelectItem>
            </Select>

            <Input
              className="py-2"
              name="name"
              placeholder="Название"
              type="Name"
              required
              ref={nameInput}
            />
            <Input
              name="description"
              placeholder="Описание"
              type="Name"
              required
              ref={descriptionInput}
            />
            <Input
              className="py-1"
              name="price"
              placeholder="Цена"
              type="Name"
              required
              ref={priceInput}
            />
            <Input className="py-1" name="src" type="file" required multiple ref={srcInput} />
            <div className="buttons-container">
              <Button type="submit" className="button-arounder">
                ДОБАВИТЬ
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AddProduct;
