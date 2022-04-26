import React, { useEffect, useState } from "react"
import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import StaffMemberCard from "../shared/StaffMemberCard"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper"
import { getContentByQuery } from "../../services/ContentfulService"
import { GET_STAFF_MEMBERS } from "../../services/ContentfulService/queries/queries"
import {
  INITIAL_PARISH_STAFF_MEMBER_OBJ,
  ParishStaffMember,
} from "../../common/commonModels"
import { sortByProperty } from "../../utils/ListUtils"

const PastoralBanner = () => {
  const [staffMembers, setStaffMembers] = useState([
    INITIAL_PARISH_STAFF_MEMBER_OBJ,
  ])

  const getSliders = (members: Array<ParishStaffMember>) => {
    const sortedMembers = sortByProperty(members, "name")
    return sortedMembers.map((member, index) => {
      return (
        <SwiperSlide key={index}>
          <Center h={"100%"} w={"100%"} bgColor={"brand.900"}>
            <StaffMemberCard
              name={member.name}
              lastName={member.lastName}
              prefix={member.prefix}
              membersRole={member.membersRole}
              membersPicture={member.membersPicture}
              membersBiography={member.membersBiography}
            />
          </Center>
        </SwiperSlide>
      )
    })
  }

  useEffect(() => {
    getContentByQuery(GET_STAFF_MEMBERS).then((response) => {
      const memberObjs: Array<ParishStaffMember> =
        response?.data?.data?.parishStaffMemberCollection?.items
      setStaffMembers(memberObjs)
    })
  }, [])

  return (
    <Box h={["xs", "xl"]} bgColor={"brand.900"}>
      <Center w={"100%"} color={"brand.150"}>
        <Text textStyle={"h1"}>Pastoral Team</Text>
      </Center>

      <Flex h={"90%"} gap={3}>
        <Swiper
          effect={"coverflow"}
          loop={true}
          centeredSlides={false}
          slidesPerView={3}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        >
          {getSliders(staffMembers)}
        </Swiper>
      </Flex>
    </Box>
  )
}

export default PastoralBanner
