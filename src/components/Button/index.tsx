import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return <S.Wrapper {...props} />;
}

export default Button;
