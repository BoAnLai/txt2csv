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
  fileInString = iconv.decode(Buffer.from(data), 'big5')
}


//synchronous API

// let data = fs.readFileSync(path)
// data = iconv.decode(Buffer.from(data), 'big5') 
// console.log(data)

// function readFile(path) {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.err(err)
//       return
//     }
//     let output = iconv.decode(Buffer.from(data), 'big5')
//     console.log(output)
//     return output
//   })
// }
