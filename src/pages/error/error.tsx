import {useRouteError} from 'react-router-dom';

import {NavLink, Text, Title, Wrapper} from './styles';

export function Error() {
  const error = useRouteError() as Error;

  return (
    <Wrapper>
      <Title>Whoops, algo aconteceu...</Title>
      <Text>
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </Text>
      <Text>{error?.message || JSON.stringify(error)}</Text>
      <Text>
        Voltar para o <NavLink to="/">início</NavLink>
      </Text>
    </Wrapper>
  );
}
