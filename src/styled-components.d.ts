import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    border: {
      radius: string
    }
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
        huge: string
      }
    }
    colors: {
      purple: string
      hoverPurple: string
      lightPink: string
      red: string
      darkPink: string
      danger: string
      hoverDanger: string
      textWhite: string
      white: string
      black: string
      shadow: string
      lightGray: string
      hoverLightGray: string
      mediumGray: string
      hoverMediumGray: string
      darkGray: string
      background: string
      text: string
      inputBackground: string
      answeredQuestionBackground: string
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      huge: string
    }
    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
    transition: {
      default: string
      fast: string
    }
  }
}
