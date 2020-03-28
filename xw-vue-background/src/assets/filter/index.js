function arrangeDate(date) {
  let d = new Date(date * 1000)
  let year = d.getFullYear()
  let month = ('0' + (d.getMonth() + 1)).slice(-2)
  let day = ('0' + (d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate())).slice(-2)
  let hour = ('0' + d.getHours()).slice(-2)
  let minutes = ('0' + d.getMinutes()).slice(-2)
  let seconds = ('0' + d.getSeconds()).slice(-2)
  return {
    year,
    month,
    day,
    hour,
    minutes,
    seconds
  }
}

let Day = (date) => {
  let res = arrangeDate(date)
  return res.year + '-' + res.month + '-' + res.day
}

let Minute = (date) => {
  let res = arrangeDate(date)
  return res.year + '-' + res.month + '-' + res.day + ' ' + res.hour + ':' + res.minutes
}

let Second = (date) => {
  let res = arrangeDate(date)
  return res.year + '-' + res.month + '-' + res.day + ' ' + res.hour + ':' + res.minutes + ':' + res.seconds
}

let filterEnum = (val, filed) => {
  if (val === undefined || val === '') {
    return '未知'
  }

  let data = Enum[filed] || null
  if (!data) {
    return '未知'
  }

  let res = data[val] || null
  if (!res) {
    return '未知'
  }

  return res
}

export default {
  Day,
  Minute,
  Second,
  Enum: filterEnum
}
