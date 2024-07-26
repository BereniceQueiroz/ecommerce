import styled, {css} from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ContentCart = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  ${media.greaterThan('large')`
    flex-direction: row;
    width: 60%;
  `}
`;

export const Products = styled.div`
  ${({theme}) => css`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 40px;
    gap: 20px;
    border-bottom: 1px solid ${theme.COLORS.GRAY_100};
  `}
`;

export const Title = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: 700;
    color: ${theme.COLORS.BLACK};
  `}
`;

export const Order = styled.div`
  ${({theme}) => css`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    border: 1px solid ${theme.COLORS.GRAY_100};

    ${media.greaterThan('large')`
      width: 40%;
    `}
  `}
`;

export const Preview = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    border-bottom: 1px solid ${theme.COLORS.GRAY_100};
  `}
`;

export const PreviewItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;

export const Label = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: 700;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Value = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: 700;
    color: ${theme.COLORS.BLACK};
  `}
`;
