import ImageCard from '@/assets/cover.png';

import {
  AboutInfo,
  Image,
  Content,
  NameDescription,
  Stock,
  Value,
  Wrapper,
} from './styles';
export function Card() {
  return (
    <Wrapper>
      <Image src={ImageCard} alt={'Classic Monochrome Tees'} />
      <AboutInfo>
        <NameDescription>Classic Monochrome Tees</NameDescription>
        <Content>
          <Stock>IN STOCK</Stock>
          <Value>R$35,00</Value>
        </Content>
      </AboutInfo>
    </Wrapper>
  );
}
