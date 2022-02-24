// express 參數設定
const express = require('express')
const app = express()
const port = 3000

// 設定handlebars
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態檔案讀取位置
app.use(express.static('public'))

// 載入餐廳資訊
const restaurantList = require('./restaurant.json')

// 設定路由
app.get('/', (req, res) => {
  res.render('index', { List: restaurantList.results })
})

// 顯示餐廳細節
app.get('/restaurants/:restaurant_id', (req, res) => {
  const detail = restaurantList.results.find((restaurant) => restaurant.id === Number(req.params.restaurant_id))
  res.render('show_detail', { detail: detail })
})

// 設定搜尋功能
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  const searchBox = restaurantList.results.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })

  res.render('index', { list: searchBox, keyword: keyword })
}
)

// 啟動與監聽路由
app.listen(port, () => {
  console.log(`Express is running on gttp://localhost:${port}`)
})
