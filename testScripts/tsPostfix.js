/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-18 16:32:54
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-18 16:50:22
 * @Description  : 测试ts后缀，匹配文件名
 */
const regex = /([^/]+)\.ts$/

const str = '/src/test.ts'
const str2 = '/src/hell.ts.config.ts'

const a = str.match(regex)
const b = str2.match(regex)

console.log(a, b)
