import styled, {css} from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 0;

  ${media.greaterThan('large')`
    width: 80%;
    display: flex;
    flex-direction: row;
  `};
`;

export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: auto;

  ${media.greaterThan('large')`
    width: 80%;
    display: flex;
    flex-direction: row;
  `}
`;

export const CardWrapper = styled.div`
  margin: 40px 0 0;

  ${media.greaterThan('medium')`
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  `}

  ${media.greaterThan('large')`
    flex: 1 1 calc(40% - 20px);
    max-width: calc(40% - 20px);
  `}

  ${media.greaterThan('huge')`
    flex: 1 1 calc(33.33% - 40px);
    max-width: calc(33.33% - 20px);
  `}
`;

export const Categories = styled.div`
  ${({theme}) => css`
    border: 1px solid ${theme.COLORS.GRAY_200};
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 40px auto;
    height: auto;
    padding: 12px;
    border-radius: 12px;

    ${media.greaterThan('large')`
      width: 250px;
      height: 200px;
    `}
  `}
`;

export const TextEmpty = styled.p`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BLACK};
  `}
`;
