import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 45px;
    width: auto;
    border: 1px solid ${theme.COLORS.GRAY_50};
    border-radius: 6px;
    padding: 12px;
  `}
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  height: 40px;
  outline: 0;
  border: none;
`;
