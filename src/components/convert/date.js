import React from 'react'
import {Text} from 'react-native'
const convertDays = (day) => {
  switch (day) {
    case 0:
      return 'Sun'
      break;
    case 1:
      return 'Mon'
      break;
    case 2:
      return 'Tue'
      break;
    case 3:
      return 'Wed'
      break;
    case 4:
      return 'Thu'
      break;
    case 5:
      return 'Fri'
      break;
    case 6:
      return 'Sat'
      break;
  
    default:
      break;
  }
}

export const thisDay = (value) => {
  let d = new Date()
  let newDate = d.getDate() + value + 1
  d.setDate(newDate)

  let day = d.getDay()

  if(value == 0){
    return 'Today'
  } else {
    return `${convertDays(day)}`
  }
}

const convertMonth = (value) => {
  switch (value) {
    case 1:
      return 'Jan'
      break;
    case 2:
      return 'Feb'
      break;
    case 3:
      return 'Mar'
      break;
    case 4:
      return 'Apr'
      break;
    case 5:
      return 'Mei'
      break;
    case 6:
      return 'Jun'
      break;
    case 7:
      return 'Jul'
      break;
    case 8:
      return 'Agt'
      break;
    case 9:
      return 'Sep'
      break;
    case 10:
      return 'Okt'
      break;
    case 11:
      return 'Nov'
      break;
    case 12:
      return 'Des'
      break;
  
    default:
      break;
  }
}

export const cekDate = (value) => {
  let d = new Date()
  let newDate = d.getDate() + value + 1
  d.setDate(newDate)
  let date = d.getDate()

  return `${date}`
}

export const cekMonth = (value) => {
  let d = new Date()
  let newDate = d.getDate() + value + 1
  d.setDate(newDate)
  let month = d.getMonth() + 1

  return `${convertMonth(month)}`
}