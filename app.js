const fs = require('fs')
const fsPromises = require('fs').promises

const chardet = require('chardet')
const { Buffer } = require('node:buffer')
const iconv = require('iconv-lite') 

const path = 'data.txt'
console.log(`encoding of ${path}: ${chardet.detectFileSync(path)}\n`)

//promise API
let fileInString = ''
readFilePromise(path).then(() => console.log(fileInString))

async function readFilePromise(path) {
  let data = await fsPromises.readFile(path)
  console.log(data)
  fileInString = iconv.decode(Buffer.from(data), 'big5')
}