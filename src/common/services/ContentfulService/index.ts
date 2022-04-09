import axios, { AxiosPromise } from "axios"
const C_SPACE = process.env.NEXT_PUBLIC_C_SPACE
const C_T = process.env.NEXT_PUBLIC_C_T
const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${C_SPACE}/`

export const getContentByQuery = (query: string) => {
  return axios({
    url: BASE_URL,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // Authenticate the request
      Authorization: `Bearer ${C_T}`,
    },
    data: {
      query: query,
    },
  })
}
