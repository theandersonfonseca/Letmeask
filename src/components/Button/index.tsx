import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

function Button({ isOutlined = false, ...props }: ButtonProps) {
  return <S.Wrapper {...props} isOutlined={isOutlined} />
}

export default Button
