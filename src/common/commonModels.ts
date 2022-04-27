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

export type ParishStaffMember = {
  prefix?: string
  name: string
  lastName: string
  membersRole?: string
  membersPicture: Url
  membersBiography?: string
  residence?: string
}

export const INITIAL_PARISH_STAFF_MEMBER_OBJ: ParishStaffMember = {
  lastName: "",
  membersBiography: "",
  membersPicture: { url: "" },
  membersRole: "",
  name: "",
  prefix: "",
  residence: "",
}
