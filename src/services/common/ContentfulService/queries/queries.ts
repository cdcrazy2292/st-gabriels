export const GetLatestHomePageGalleryQuery = `
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
export const GetParishEvents = `
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

export const getRegularParishSchedule = `
query {
  regularParishSchedule(id: "5uae2Q6sn9drqDdAVQYZnP") {
    schedule
  }
}
`
