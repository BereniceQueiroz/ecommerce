import {GetProductsQuery} from '@/dtos/products';
import {api} from '@/lib/axios';

export async function getProducts() {
  const response = await api.get<GetProductsQuery>('/products');

  return response.data;
}
