import {Link} from 'react-router-dom';

import styled, {css} from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.header`
  ${({theme}) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100%;
    background-color: ${theme.COLORS.WHITE};
  `}
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 20px;

  ${media.greaterThan('large')`
    flex-direction: row;
    padding: 10px 60px;
    gap: 80px;
  `}
`;

export const Brand = styled.div`
  display: none;
  ${media.greaterThan('large')`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: auto;
  `}
`;

export const BrandTitle = styled.div`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
    font-weight: 800;
  `}
`;

export const ContentDiscount = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 10px;
    background-color: ${theme.COLORS.BLUE};
  `}
`;

export const TextDiscount = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const NavList = styled.div`
  display: none;
  ${media.greaterThan('large')`
    display: block;
  `}
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;
export const ContentNav = styled.div`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    gap: 10px;
  `}
`;

export const MenuLink = styled(Link)`
  ${({theme}) => css`
    position: relative;
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    text-decoration: none;
    text-align: left;
    height: 20px;

    &:hover {
      color: ${theme.COLORS.BLUE};
    }

    &:focus {
      outline: none;
      color: ${theme.COLORS.BLUE};
    }

    &:active {
      outline: none;
    }
  `}
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  ${media.greaterThan('large')`
    flex-direction: row;
    align-items: center;
    gap: 20px;
  `}
`;
