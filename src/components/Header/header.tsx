import {useState} from 'react';

import SVGCartIcon from '@/assets/cart.svg?react';
import SVGLogo from '@/assets/logo.svg?react';
import SVGMenuIcon from '@/assets/menu.svg?react';
import SVGProfileIcon from '@/assets/user.svg?react';
import {InputSearch} from '@/components/InputSearch/input-search';
import {Menu} from '@/components/Menu/menu';

import {
  Brand,
  BrandTitle,
  CartBadge,
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
import {HeaderProps} from './types';

export function Header({productCount}: HeaderProps) {
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
              {productCount > 0 && <CartBadge>{productCount}</CartBadge>}
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
