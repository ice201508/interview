var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.get('/list', (req,res) => {
  console.log('接收到了list请求')
  res.send({status: 200, msg: '请求成功'})
})

app.post('/login', (req,res) => {
  console.log('接收到了login-post请求：', req.body);
  res.send({status:200, msg: 'post请求成功'})
})

app.listen(3000,()=>{
  console.log('服务器启动成功：', '端口在3000')
})