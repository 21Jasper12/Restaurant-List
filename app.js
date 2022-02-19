// express 參數設定
const express = require('express')
const app = express()
const port = 3000

// 設定路由
app.get('/', (req, res) => {
  res.send(`<h1>TEST TEST</h1>`)
})

// 啟動與監聽路由
app.listen(port, () => {
  console.log(`Express is running on gttp://localhost:${port}`)
})
