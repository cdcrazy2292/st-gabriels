import React, { FC, useEffect, useState } from "react"
import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

import { Pagination, Navigation, EffectFade, Autoplay } from "swiper"
import { getContentByQuery } from "../../services/common/ContentfulService"
import { GetLatestHomePageGalleryQuery } from "./queries"

type GalleryCollectionItem = {
  description: string
  title: string
  url: string
}

const INITIAL_GALLERY_COLLECTION_STATE: GalleryCollectionItem = {
  description: "",
  title: "",
  url: "",
}

const getCards = (items: Array<GalleryCollectionItem>) => {
  console.log("items", items)
  if (items) {
    return items.map(({ description, title, url }, index) => {
      return (
        <SwiperSlide key={index}>
          <Center
            h="100%"
            w="100%"
            bgImage={`linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2)), url(${url})`}
          >
            <VStack>
              <Heading as="h1">{title}</Heading>
              <Text>{description}</Text>
            </VStack>
          </Center>
        </SwiperSlide>
      )
    })
  }
  return []
}

const HomeCarousel: FC = () => {
  const [galleryImages, setGalleryImages] = useState([
    INITIAL_GALLERY_COLLECTION_STATE,
  ])

  /**
   *  Fetches images from contentful
   */
  async function getGalleryImages() {
    const response = await getContentByQuery(GetLatestHomePageGalleryQuery)
    setGalleryImages(
      response?.data?.data?.homePagePhotosCollection.items[0]
        ?.photoGalleryCollection.items
    )
  }

  useEffect(() => {
    getGalleryImages()
  }, [])

  console.log(galleryImages)
  return (
    <>
      <Box w="100%" h={["sm", "md", "lg", "xl"]}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {getCards(galleryImages)}
        </Swiper>
      </Box>
    </>
  )
}

export default HomeCarousel
