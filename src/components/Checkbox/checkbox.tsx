import {Label, Wrapper} from './styles';
import {CheckboxProps} from './types';

export function Checkbox({label, name, checked, onChange}: CheckboxProps) {
  return (
    <Wrapper>
      <Label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </Label>
    </Wrapper>
  );
}
