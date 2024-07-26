import {GetProductCategoryParams, GetProductsQuery} from '@/dtos/products';
import {api} from '@/lib/axios';

export async function getProductsCategory({
  category,
}: GetProductCategoryParams) {
  const response = await api.get<GetProductsQuery>(
    `/products/category/${category}`,
  );

  return response.data;
}
