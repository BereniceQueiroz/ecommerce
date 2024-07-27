import {Link} from 'react-router-dom';

import styled, {css} from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
    margin-bottom: 20px;

    ${media.greaterThan('large')`
      font-size: ${theme.FONT_SIZE.SM}px;
    `}
  `}
`;

export const Text = styled.div`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `}
`;
export const NavLink = styled(Link)`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.MEDIUM};
    color: ${theme.COLORS.BLACK};
    border-bottom: 1px solid ${theme.COLORS.BLACK};
    &:hover,
    &:focus {
      color: ${theme.COLORS.BLUE};
      border-bottom: 1px solid ${theme.COLORS.BLUE};
    }
    &:active {
      color: ${theme.COLORS.BLUE};
      border-bottom: 1px solid ${theme.COLORS.BLUE};
    }
  `}
`;
