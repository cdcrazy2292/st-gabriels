import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors"
import { fontSizes } from "./fontSizes"
const overrides = {
  colors,
  fontSizes,
}
export default extendTheme(overrides)
