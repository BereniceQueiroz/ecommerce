import {useState} from 'react';
import {Helmet} from 'react-helmet-async';

import {getProducts} from '@/api/get-products';
import {getProductsCategory} from '@/api/get-products-categories';
import {Breadcrumb} from '@/components/Breadcrumb/breadcrumb';
import {Card} from '@/components/Card/card';
import {Checkbox} from '@/components/Checkbox/checkbox';
import {useCart} from '@/context/cart-context';
import {GetProductsQuery, ProductsItem} from '@/dtos/products';
import {useQuery} from '@tanstack/react-query';

import {breadcrumbItems, categoriesList, categoryMap} from './data';
import {
  CardWrapper,
  Categories,
  Content,
  ContentCard,
  TextEmpty,
  Wrapper,
} from './styles';
import {CategoriesState} from './types';

export function Home() {
  const {addToCart} = useCart();
  const [categories, setCategories] = useState<CategoriesState>({
    perfumes: false,
    camisetas: false,
    joias: false,
    eletronicos: false,
  });

  const selectedCategories = Object.keys(categories)
    .filter(category => categories[category as keyof CategoriesState])
    .map(category => categoryMap[category]);

  const {data: result} = useQuery<GetProductsQuery>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const {data: resultCategory} = useQuery({
    queryKey: ['category', selectedCategories],
    queryFn: () => getProductsCategory({category: selectedCategories[0]}),
    enabled: selectedCategories.length > 0, // Busca apenas quando há categorias selecionadas
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target;
    setCategories(() => {
      const newCategories = {
        perfumes: false,
        camisetas: false,
        joias: false,
        eletronicos: false,
      };
      if (checked) {
        newCategories[name as keyof CategoriesState] = true;
      }
      return newCategories;
    });
  };

  const handleAddToCart = (product: ProductsItem) => {
    addToCart(product);
  };

  const products = resultCategory ?? result;

  return (
    <Wrapper>
      <Helmet title="Produtos" />
      <Breadcrumb items={breadcrumbItems} />

      <Content>
        <Categories>
          {categoriesList.map(category => (
            <Checkbox
              key={category.name}
              label={category.label}
              name={category.name}
              checked={categories[category.name as keyof CategoriesState]}
              onChange={handleCheckboxChange}
            />
          ))}
        </Categories>

        <ContentCard>
          {products && products.length > 0 ? (
            products.map(product => (
              <CardWrapper key={product.id}>
                <Card
                  product={product}
                  onClick={() => handleAddToCart(product)}
                />
              </CardWrapper>
            ))
          ) : (
            <TextEmpty>Nenhum produto encontrado</TextEmpty>
          )}
        </ContentCard>
      </Content>
    </Wrapper>
  );
}
