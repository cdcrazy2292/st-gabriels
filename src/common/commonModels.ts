export const enum PAGE_LOCATION {
  // eslint-disable-next-line no-unused-vars
  ABOUT_PAGE = "About Page",
}

type Url = {
  url: string
}

export type GeneralPageMessage = {
  name: string
  headingMessage: string
  messageBody: string
  messageBackgroundImage: Url
  locationMessage: PAGE_LOCATION
  citation: string
}
