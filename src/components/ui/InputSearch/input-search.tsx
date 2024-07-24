import {useState, ChangeEvent, KeyboardEvent} from 'react';

import SVGSearchIcon from '@/assets/search.svg?react';

import {Input, Wrapper} from './styles';
import {InputSearchProps} from './types';

export function InputSearch({onSearch}: InputSearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <Wrapper>
      <SVGSearchIcon />
      <Input
        type="text"
        placeholder="Procure um produto"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Wrapper>
  );
}
