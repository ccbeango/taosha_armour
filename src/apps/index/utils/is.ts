/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-16 16:02:40
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-19 20:05:05
 * @Description  : 基本判断工具函数
 */

export function is(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

export function isUndef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'String')
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(val: unknown): val is Function {
  return is(val, 'Function') || is(val, 'AsyncFunction')
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp')
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUndef(val) || isNull(val)
}

export function isObject(val?: any): val is Record<any, any> {
  return !isNull(val) && is(val, 'Object')
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map')
}

export function isSet(val: unknown): val is Set<any> {
  return is(val, 'Map')
}

export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

export function isEmpty<T = unknown>(val?: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (isMap(val) || isSet(val)) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

export function isPromise<T = any>(val?: unknown): val is Promise<T> {
  return (
    is(val, 'Promise') &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  )
}

export function isUrl(path: string): boolean {
  // TODO: 正则需要优化
  const reg =
    // eslint-disable-next-line no-useless-escape
    /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}
