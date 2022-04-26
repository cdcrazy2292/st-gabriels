import React from "react"
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { ParishStaffMember } from "../../../common/commonModels"

const StaffMemberCard = (props: ParishStaffMember) => {
  const {
    name,
    prefix,
    membersRole,
    lastName,
    membersPicture,
    membersBiography,
  } = props
  return (
    <Center py={2} h={"100%"}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        // height={{ sm: "476px", md: "20rem" }}
        h={"100%"}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200" h={"100%"}>
          <Image
            objectFit={"cover"}
            boxSize="100%"
            src={membersPicture.url}
            alt={"Priest"}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {prefix} {name} {lastName}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {membersRole}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {membersBiography}
          </Text>
        </Stack>
      </Stack>
    </Center>
  )
}

export default StaffMemberCard
