var express = require('express');
const path = require('path')

var app = express();

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3001,()=>{
  console.log('前台开发服务器启动成功：', '端口在3001')
})