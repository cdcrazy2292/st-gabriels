export const divideListInChunks = (arr: Array<any>, size: number) =>
  arr.reduce(
    (acc, e, i) => (
      i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
    ),
    []
  )

export const sortByProperty = (arr: Array<any>, property: string) => {
  return arr.sort((a, b) => (a[property] > b[property] ? 1 : -1))
}

export const getAllByPropertyAndValue = (
  arr: Array<any>,
  property: string,
  value: string
) => {
  return arr.filter((obj) => obj[property] === value)
}

export const getAllExcept = (
  arr: Array<any>,
  property: string,
  value: string
) => {
  return arr.filter((obj) => obj[property] !== value)
}
