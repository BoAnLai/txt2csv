const fs = require('fs')
const fsPromises = require('fs').promises

const chardet = require('chardet')
const { Buffer } = require('node:buffer')
const iconv = require('iconv-lite')

const path = 'data.txt'
// console.log(`encoding of ${path}: ${chardet.detectFileSync(path)}\n`)

//promise API
let dataInString = ''
readFilePromise(path).then(() => console.log(string2Object(dataInString)))

console.log(`\n===app.js reach end===\n`)


async function readFilePromise(path) {
  let dataInBinary = await fsPromises.readFile(path)
  try {
    dataInString = iconv.decode(Buffer.from(dataInBinary), chardet.detectFileSync(path))
  } catch (error) {
    console.error(`error in readFilePromise(), might occur due to unsupported encoding\n`)
    console.error(error)
  }
}

function string2Object(str) {
  //拆分單一string為單一object(內含一層子object)
  //分3部分:
  //cleanArr:依'\n'為分隔點，拆分input string為array，並trim()
  //arrDepot:依''為分隔點，拆分array為二維array
  //outputObj:轉換二維array為obj，子array[0]為子obj的name，其餘以index為attribute名稱(如array[1]=>obj{1:})

  let cleanArr = ((str) => {
    const arr = str.split('\n')
    const arr1 = arr.map(element => element.trim())
    return arr1
  })(str)

  //依''拆分array
  let arrDepot = ((cleanArr) => {
    let arrDepot = []
    for (let i = 0; cleanArr.length > 1; i++) {
      if (cleanArr.indexOf('') == -1) {
        arrDepot[i] = cleanArr.splice(0, cleanArr.length)
      } else {
        let blankIndex = cleanArr.indexOf('')
        arrDepot[i] = cleanArr.splice(0, blankIndex)
        cleanArr.shift()
      }
    }
    return arrDepot
  })(cleanArr)

  //專門render二維陣列
  let outputObj = ((arrDepot) => {
    let outputObj = {}
    arrDepot.forEach((arr) => {
      arr.forEach((elem) => {
        if (arr.indexOf(elem) === 0) {
          outputObj[arr[0]] = {
            'name': elem
          }
        } else {
          outputObj[arr[0]][arr.indexOf(elem)] = elem
        }
      })
    })
    return outputObj
  })(arrDepot)

  return outputObj
}