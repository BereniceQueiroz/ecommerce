import {useState} from 'react';

import SVGCartIcon from '@/assets/cart.svg?react';
import SVGLogo from '@/assets/logo.svg?react';
import SVGMenuIcon from '@/assets/menu.svg?react';
import SVGProfileIcon from '@/assets/user.svg?react';
import {Menu} from '@/components/Menu/menu';
import {InputSearch} from '@/components/ui/InputSearch/input-search';

import {
  Brand,
  BrandTitle,
  ContentDiscount,
  ContentHeader,
  List,
  MenuIcon,
  MenuLink,
  NavList,
  Search,
  TextDiscount,
  Wrapper,
} from './styles';

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Wrapper>
        <ContentDiscount>
          <TextDiscount>Ganhe 25% OFF no seu primeiro pedido.</TextDiscount>
        </ContentDiscount>
        <ContentHeader>
          <Brand>
            <SVGLogo />
            <BrandTitle>Ecommerce</BrandTitle>
          </Brand>
          <MenuIcon>
            <SVGMenuIcon
              aria-label="Open menu"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            />
          </MenuIcon>
          <NavList>
            <List>
              <MenuLink to="/">Home</MenuLink>
              <MenuLink to="#">Categorias</MenuLink>
              <MenuLink to="#">Sobre</MenuLink>
              <MenuLink to="#">Contato</MenuLink>
            </List>
          </NavList>
          <Search>
            <InputSearch onSearch={() => {}} />
            <MenuLink to="/cart">
              <SVGCartIcon />
            </MenuLink>
            <MenuLink to="#">
              <SVGProfileIcon />
            </MenuLink>
          </Search>
        </ContentHeader>
      </Wrapper>
      <Menu open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
