import React from "react"
import {
  Collapse,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { ChevronDownIcon, Icon } from "@chakra-ui/icons"
import { NavItem } from "../types"

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const COMMON_TEXT_COLOR = useColorModeValue("gray.900", "brand.50")
  const MENU_GROUP_BORDER_COLOR = useColorModeValue("brand.800", "brand.50")
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        color={COMMON_TEXT_COLOR}
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={COMMON_TEXT_COLOR}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={MENU_GROUP_BORDER_COLOR}
          align={"start"}
          color={COMMON_TEXT_COLOR}
        >
          {children &&
            children.map((child: NavItem) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export default MobileNavItem
