export interface ProductsItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type GetProductsQuery = ProductsItem[];

export interface GetProductCategoryParams {
  category: string;
}
