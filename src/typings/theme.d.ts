import 'styled-components'
import { Theme } from 'styles'

type Theme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
