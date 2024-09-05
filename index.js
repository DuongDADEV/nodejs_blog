// Vào thư mục node_modules tải folder express
const express = require('express')

// Trả về đối tượng xây dựng ra webside
const app = express()

// Chỉ định port(cổng) để chạy webserver
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})