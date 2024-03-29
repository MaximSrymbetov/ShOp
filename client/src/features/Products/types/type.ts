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
export type ProductId = Product['id'];

export type ProductWithoutOwnerPhoto = Omit<
  Product,
  'category_id' | 'Images' | 'category_id' | 'gender_id'
>;