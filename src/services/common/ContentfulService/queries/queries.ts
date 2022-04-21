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
  events(id: "68vXbm6e5QwCF6YzeU4FNT") {
    eventsRefCollection {
      total,
      items {
        startDate,
        endDate,
        eventTitle, 
        eventDescription
      }
    }
  }
}
`
