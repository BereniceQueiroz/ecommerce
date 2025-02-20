import {css, styled} from 'styled-components';

export const Wrapper = styled.div`
  width: 264px;
  height: 434px;
  margin: 0 auto;
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  width: 100%;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

export const AboutInfo = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    height: 20%;
    padding: 10px;
    gap: 10px;
    background-color: ${theme.COLORS.WHITE};
  `}
`;
export const NameDescription = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `}
`;
export const Content = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: ${theme.COLORS.WHITE};
    width: 100%;
  `}
`;

export const Stock = styled.div`
  ${({theme}) => css`
    width: auto;
    height: 30px;
    padding: 16px;
    border-radius: 15px;
    border: 1px solid ${theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
  `}
`;
export const Value = styled.div``;
