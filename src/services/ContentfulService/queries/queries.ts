import { PAGE_LOCATION } from "../../../common/commonModels"

export const GET_LATEST_HOME_PAGE_GALLERY = `
query {
  homePagePhotosCollection(order: sys_publishedAt_DESC) {
    items {
      name,
      photoGalleryCollection {
        items {
          title,
          description,
          url
        }
      }
    }
  }
}
`
export const GET_PARISH_EVENTS = `
query {
  eventCollection {
    items {
      startDate,
      endDate,
      eventDescription,
      eventTitle
    }
  }
}
`

export const GET_REGULAR_PARISH_SCHEDULE = `
query {
  regularParishSchedule(id: "5uae2Q6sn9drqDdAVQYZnP") {
    schedule
  }
}
`

export const getMessagesByPage = (page: PAGE_LOCATION) => {
  return `
    query {
  pageMessagesCollection(where: {locationOfMessage: "${page}"}) {
    items {
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
}
`
}

export const GET_STAFF_MEMBERS = `
query {
  parishStaffMemberCollection {
    items {
      prefix,
      name,
      lastName,
      membersRole,
      membersPicture {
        url
      },
      membersBiography      
    }
  }
}
`
