/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-16 17:40:00
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-16 17:48:45
 * @Description  : userAgent相关
 */

const { userAgent } = navigator
const UA = userAgent.toLowerCase()

const isAndroid = /android/gi.test(UA)
const isiOS = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)
const isiPhone = /iphone/gi.test(UA)
const isiPad = /ipad/gi.test(UA)
const isMac = /macintosh/gi.test(UA)
const isWindows = /windows/gi.test(UA)

export const PLATFORM = {
  isAndroid,
  isiOS,
  isiPhone,
  isiPad,
  isMac,
  isWindows
}

export const OS_TYPE = {
  ANDROID: 'Android',
  IOS: 'iOS',
  MAC: 'Mac',
  WINDOWS: 'Windows',
  UNKNOWN: 'Unknown'
}

export const getOsType = () => {
  let os = null

  if (isiOS) {
    os = OS_TYPE.IOS
  } else if (isAndroid) {
    os = OS_TYPE.ANDROID
  } else if (isMac) {
    os = OS_TYPE.MAC
  } else if (isWindows) {
    os = OS_TYPE.WINDOWS
  } else {
    os = OS_TYPE.UNKNOWN
  }

  return os
}
