import {BreadcrumbItem} from '@/components/Breadcrumb/types';

export const breadcrumbItems: BreadcrumbItem[] = [
  {label: 'Ecommerce', url: '#'},
  {label: 'Home', url: '/'},
];

export const categoriesList = [
  {label: 'Perfumes', name: 'perfumes'},
  {label: 'Camisetas', name: 'camisetas'},
  {label: 'Joias', name: 'joias'},
  {label: 'Eletronicos', name: 'eletronicos'},
];

export const categoryMap: {[key: string]: string} = {
  perfumes: 'perfumes',
  camisetas: 'shirts',
  joias: 'jewelery',
  eletronicos: 'electronics',
};
