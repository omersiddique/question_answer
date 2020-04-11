import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography(kirkhamTheme)

export const { scale, options } = typography
export default typography
export const rhythm = typography.rhythm