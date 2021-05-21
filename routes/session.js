// 注册、登陆、退出
var express = require('express')
var router = express.Router()

router.get('/', (erq, res) => { 
    res.render('index.html')
})
router.get('/login', (erq, res) => { 
    res.render('login.html')
})
router.post('/login', (erq, res) => { 
    res.render('index.html')
})