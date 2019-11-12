const fs = require('fs')

const sw = fs.readFileSync('./public/sw_base.js')
fs.writeFileSync('./public/sw.js', `var staticCacheName = \'mtdApp-cache-v${Date.now()}\'
`)

fs.appendFileSync('./public/sw.js', sw)

console.log('created a new sw.js file!')
