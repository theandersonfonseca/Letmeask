import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
  return (
    <S.Button {...props} />
  )
}

export default Button