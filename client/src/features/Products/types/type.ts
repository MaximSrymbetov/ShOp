export type Image = {
  id: number;
  product_id: number;
  src: string;
};

export type Product = {
  id: number;
  category_id: number;
  gender_id: number;
  name: string;
  description: string;
  price: string;
  Images: Image[];
};
