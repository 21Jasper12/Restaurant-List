// express 參數設定
const express = require('express')
const app = express()
const port = 3000

// 設定handlebars
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})

// 啟動與監聽路由
app.listen(port, () => {
  console.log(`Express is running on gttp://localhost:${port}`)
})
