export type Schedule = {
  dateCadance: string
  name: string
  time: string
}
export type RegularParishSchedule = {
  churchHolyHour: Array<Schedule>
  churchOfficeHours: Array<Schedule>
  churchOpenSchedule: Array<Schedule>
  confessionsSchedule: Array<Schedule>
  massSchedule: Array<Schedule>
}

export const INITIAL_SCHEDULE: Schedule = {
  dateCadance: "",
  name: "",
  time: "",
}

export const INITIAL_REG_PARISH_SCHEDULE_STATE: RegularParishSchedule = {
  churchHolyHour: [INITIAL_SCHEDULE],
  churchOfficeHours: [INITIAL_SCHEDULE],
  churchOpenSchedule: [INITIAL_SCHEDULE],
  confessionsSchedule: [INITIAL_SCHEDULE],
  massSchedule: [INITIAL_SCHEDULE],
}

export type InfoCardElementData = {
  bgColor: string
  color: string
  icon: any
  schedule: Array<Schedule>
}

export const INITIAL_INFO_CARD_ELEMENT_DATA: InfoCardElementData = {
  bgColor: "",
  color: "",
  icon: "",
  schedule: [INITIAL_SCHEDULE],
}
