export const GET_ABOUT_WELCOME_MESSAGE = `
query {
  pageMessage(id: "44L7Uq87X0jerVfPxNLGIr") {
    name,
    headingMessage,
    messageBody, 
    messageBackgroundImage {
      url
    },
    locationOfMessage,
    citation
  }
}
`
