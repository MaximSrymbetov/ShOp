export type Product = {
  category_id: number;
  gender_id: number;
  name: string;
  description: string;
  price: string;

};

// export type ProductId = Product['id'];


export type Order={
  user_id: number;
  status:string;
  total:string;
  delivery_status:string;
}