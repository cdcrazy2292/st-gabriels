type localDateParts = {
  day: string
  dayPeriod: string
  hour: string
  literal: string
  minute: string
  month: string
  weekday: string
  year: string
}
interface localeDateDetails extends localDateParts {
  fullDate: string
}
type LocaleDateDetails = {
  enDate: localeDateDetails
  esDate: localeDateDetails
}
const INITIAL_LOCALE_PARTS_OBJ: localDateParts = {
  day: "",
  dayPeriod: "",
  hour: "",
  literal: "",
  minute: "",
  month: "",
  weekday: "",
  year: "",
}

export const getLocaleDateDetails = (dateStr: string): LocaleDateDetails => {
  const getDateLocaleParts = (
    dateParts: Intl.DateTimeFormatPart[]
  ): localDateParts => {
    const obj: localDateParts = INITIAL_LOCALE_PARTS_OBJ

    dateParts.forEach(({ type, value }) => {
      switch (type) {
        case "day":
          obj[type] = value
          break
        case "dayPeriod":
          obj[type] = value
          break
        case "hour":
          obj[type] = value
          break
        case "literal":
          obj[type] = value
          break
        case "minute":
          obj[type] = value
          break
        case "month":
          obj[type] = value
          break
        case "weekday":
          obj[type] = value
          break
        case "year":
          obj[type] = value
          break
      }
    })
    return obj
  }
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    year: "numeric",
    day: "2-digit",
  }
  const date = new Date(dateStr)
  const usEnDate = new Intl.DateTimeFormat("en-US", options)
  const usEsDate = new Intl.DateTimeFormat("es-US", options)
  const enDate = {
    ...getDateLocaleParts(usEnDate.formatToParts(date)),
    fullDate: usEnDate.format(date),
  }
  const esDate = {
    ...getDateLocaleParts(usEsDate.formatToParts(date)),
    fullDate: usEsDate.format(date),
  }
  return {
    enDate,
    esDate,
  }
}
