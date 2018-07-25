


var express = require('express');
var router = express.Router();
//mongodb3.0最新版就得这么配置
var MongoClient=require('mongodb').MongoClient;
// var test = require('assert');

// var respond = {};
router.post('/', function(req, res, next) {
    console.log("community is running111",req.headers.origin);

    // res.setHeader("Access-Control-Allow-Oringin",req.headers.origin)//单次允许跨域，配置cors可以不用
   // 库名字 
    var dbname = 'user'
    // mongodb地址
    var url='mongodb://127.0.0.1:27017/community';

    MongoClient.connect(url, function(err, client) {
        var col = client.db(dbname).collection('community');
       
        col.find({}).toArray(function(err, items) {
          res.send(items)
          console.log(items)
          // test.equal(null, err);
          // test.equal(4, items.length);
          client.close();
        });
      });
//数据模拟
    // let data=[{"name":"郭德","img1":"/src/assets/images/s_sq_01.png","img2":"/src/assets/images/s_sq_01.png","img3":"/src/assets/images/s_sq_01.png"},{"name":"王五","img1":"/src/assets/images/s_sq_01.png","img2":"/src/assets/images/s_sq_01.png","img3":"/src/assets/images/s_sq_01.png"},{"name":"林星","img1":"/src/assets/images/s_sq_01.png","img2":"/src/assets/images/s_sq_01.png","img3":"/src/assets/images/s_sq_01.png"}];
    // res.send(data)
 });
 
 module.exports = router;
 
 