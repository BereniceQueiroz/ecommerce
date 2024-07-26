export interface ProductsItem {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ProductsProps {
  products: ProductsItem[];
}
