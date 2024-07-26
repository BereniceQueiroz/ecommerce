import {StyledButton} from './styles';
import {ButtonProps} from './types';

export function Button({
  label,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...props}>
      {label}
    </StyledButton>
  );
}
