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
