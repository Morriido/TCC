var express = require('express')
var app = express()
var bodyParser = require('body-parser')


var load = require('express-load')
load('db').into(app)

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/register', function(req,res){
    res.render('register.ejs')
})

app.get('/cursos', function(req,res){
    res.render('cursos.ejs')
})

app.get('/login', function(req,res){
    res.render('login.ejs')
})

app.get('/',function(req,res){
    res.render('index.ejs')
})

var porta=3000
app.listen(porta,function(){
    console.log('Servidor Rodando')
})
