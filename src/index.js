const DELAY_TIME_MS = 1000
console.log(`DELAY_TIME_MS = ${DELAY_TIME_MS}`)

setInterval(() => {
  console.log(`Hello world: ${new Date().getTime()}`)
}, DELAY_TIME_MS)
