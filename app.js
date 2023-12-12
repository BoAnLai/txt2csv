const fs = require('fs')
const fsPromises = require('fs').promises

const chardet = require('chardet')
const { Buffer } = require('node:buffer')
const iconv = require('iconv-lite')

const path = 'data.txt'
// console.log(`encoding of ${path}: ${chardet.detectFileSync(path)}\n`)

//promise API
let dataInString = ''
readFilePromise(path).then(() => console.log(dataInString))

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