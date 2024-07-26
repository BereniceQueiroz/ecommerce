import {ProductsItem} from '@/dtos/products';
import {formatCurrency} from '@/utils/formatted';

import {Button} from '../Button/button';
import {
  AboutInfo,
  Image,
  Content,
  NameDescription,
  Stock,
  Value,
  Wrapper,
} from './styles';

interface CardProps {
  product: ProductsItem;
  onClick: () => void;
}

export function Card({product, onClick}: CardProps) {
  return (
    <Wrapper>
      <Image src={product?.image} alt={product?.title} />
      <AboutInfo>
        <NameDescription>{product?.title}</NameDescription>
        <Content>
          <Stock>IN STOCK</Stock>
          <Value>{formatCurrency(product?.price)}</Value>
        </Content>
      </AboutInfo>
      <Button onClick={onClick} label="Adicionar ao carrinho" />
    </Wrapper>
  );
}
