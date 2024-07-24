import {NavLink, Title, Wrapper, Text} from './styles';

export function NotFound() {
  return (
    <Wrapper>
      <Title>Página não encontrada</Title>
      <Text>
        Voltar para o <NavLink to="/">início</NavLink>
      </Text>
    </Wrapper>
  );
}
