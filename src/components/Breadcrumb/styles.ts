import {Link} from 'react-router-dom';

import {css, styled} from 'styled-components';
import media from 'styled-media-query';

interface BreadcrumbLinkProps {
  isActive: boolean;
}

export const BreadcrumbContainer = styled.nav`
  ${({theme}) => css`
    width: 100%;
    height: 64px;
    background-color: ${theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    padding: 0 40px;

    ${media.greaterThan('large')`
      padding: 0 80px;
    `}
  `}
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-weight: 600;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const BreadcrumbLink = styled(Link)<BreadcrumbLinkProps>`
  ${({theme, isActive}) => css`
    color: ${isActive ? theme.COLORS.BLACK : theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    text-decoration: none;
  `}
`;
