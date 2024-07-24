import {Link} from 'react-router-dom';

import styled, {css} from 'styled-components';

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({theme, isOpen}) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    overflow: scroll;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    background: red;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    background-color: ${theme.COLORS.WHITE};

    ${MenuLink} {
      color: ${theme.COLORS.GRAY_300};
      font-weight: 500;
      font-size: 1rem;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const CloseIcon = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid ${theme.COLORS.GRAY_300};

    svg {
      height: 60px;
      width: 60px;
    }
  `}
`;

export const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px 0;
`;

export const List = styled.ul`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    li {
      width: 100%;
      height: auto;
      font-weight: 800;
      font-size: ${theme.FONT_SIZE.XL};
      color: ${theme.COLORS.GRAY_300};
      padding: 0.5rem 1.875rem;
      cursor: pointer;
    }
  `}
`;

export const MenuLink = styled(Link)`
  ${({theme}) => css`
    position: relative;
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.XL};
    text-decoration: none;
    text-align: left;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.1rem;
      }
    }
  `}
`;
