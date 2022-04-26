import React, { useEffect, useState } from "react"
import { getContentByQuery } from "../services/ContentfulService"
import { GET_ABOUT_WELCOME_MESSAGE } from "../services/ContentfulService/queries/aboutPageQueries"
import { GeneralPageMessage, PAGE_LOCATION } from "../common/commonModels"
import PageMessage from "../components/shared/PageMessage"
import { Box } from "@chakra-ui/react"
import PastoralBanner from "../components/PastoralBanner"

const INITIAL_WELCOME_MESSAGE_OBJ: GeneralPageMessage = {
  headingMessage: "",
  locationMessage: PAGE_LOCATION.ABOUT_PAGE,
  messageBackgroundImage: { url: "" },
  messageBody: "",
  name: "",
  citation: "",
}
const About = () => {
  const [welcomeMessageObj, setWelcomeMessageObj] = useState(
    INITIAL_WELCOME_MESSAGE_OBJ
  )
  useEffect(() => {
    getContentByQuery(GET_ABOUT_WELCOME_MESSAGE).then((response) => {
      setWelcomeMessageObj(response?.data?.data?.pageMessage)
    })
  }, [])

  return (
    <Box>
      <PageMessage
        name={welcomeMessageObj.name}
        headingMessage={welcomeMessageObj.headingMessage}
        messageBody={welcomeMessageObj.messageBody}
        messageBackgroundImage={welcomeMessageObj.messageBackgroundImage}
        locationMessage={welcomeMessageObj.locationMessage}
        citation={welcomeMessageObj.citation}
      />
      <PastoralBanner />
    </Box>
  )
}

export default About
