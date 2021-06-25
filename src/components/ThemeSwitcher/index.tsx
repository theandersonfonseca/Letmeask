import * as S from './styles'

import Switch from 'react-switch'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

type ThemeSwitcherProps = {
  toggleTheme: () => void
}

function ThemeSwitcher({ toggleTheme }: ThemeSwitcherProps) {
  const { title, colors } = useContext(ThemeContext)

  return (
    <S.Wrapper>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.purple}
        onColor={colors.darkPink}
      />
    </S.Wrapper>
  )
}

export default ThemeSwitcher
