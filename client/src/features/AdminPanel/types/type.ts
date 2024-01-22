export type Product = {
  category_id: number;
  gender_id: number;
  name: string;
  description: string;
  price: string;

};

export type ProductId = Product['id'];
