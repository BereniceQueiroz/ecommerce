import styled, {css} from 'styled-components';
import media from 'styled-media-query';

export const CartItemContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid ${theme.COLORS.GRAY_100};
    padding: 10px 0;
    height: 100px;
    width: 100%;
  `}
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 50%;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 100%;
  object-fit: fill;
`;

export const ItemName = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    text-align: left;

    ${media.greaterThan('large')`
      font-size: ${theme.FONT_SIZE.MD}px;
    `}
  `}
`;

export const ItemPrice = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    text-align: center;

    ${media.greaterThan('large')`
      font-size: ${theme.FONT_SIZE.MD}px;
    `}
  `}
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ItemQuantity = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    padding: 12px;
    border: 1px solid ${theme.COLORS.GRAY_100};
    border-radius: 4px;
    height: 40px;
    width: auto;
  `}
`;

export const QuantityButton = styled.div`
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  ${({theme}) => css`
    padding: 5px;
    background-color: ${theme.COLORS.GRAY_100};
    height: 40px;
    cursor: pointer;
  `}
`;

export const QuantityValue = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
    text-align: center;

    ${media.greaterThan('large')`
      font-size: ${theme.FONT_SIZE.MD}px;
    `}
  `}
`;
