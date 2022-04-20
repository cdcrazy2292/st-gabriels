import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors"
import { textStyles, fontSizes } from "./fonts"

const overrides = {
  colors,
  textStyles,
  fontSizes,
}
export default extendTheme(overrides)
