var express = require('express');
/**
 * 解析excel
 */
var XLSX = require('xlsx');
var csvParse = require('csv-parse');
var multer  = require('multer');
var config = require('../config');

var mongoose = require('mongoose');
var WkgModel = require('../src/model/wkg').wkg;

//定义上传文件的服务器存储路径
var upload = multer({ 
    dest: 'uploads/'
});
//express路由
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/manage', upload.single('team89') ,function(req, res) {
    let file = req.file;
    let workbook = XLSX.readFile(file.path);
    


    workbook.SheetNames.forEach(sheetName => {
        var csvdatas = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        csvParse(csvdatas , (err ,output) =>{
            if(err){
                res.send({
                    code: '001',
                    msg: '模版格式错误'
                });
                return
            }
            connect(output ,res);
        });
    });
    
})

function parseData(objAary){
    let pic = objAary;
    let wkg = new WkgModel({
        auctionId: pic[0],                  //商品id
        title: pic[1],                      //商品名称
        pictUrl: pic[2],                    //商品主图
        auctionUrl: pic[3],                 //商品详情页链接地址
        shopTitle: pic[4],                  //店铺名称
        zkPrice: pic[5],                    //商品价格(单位：元)
        biz30day: pic[6],                   //商品月销量
        tkRate: pic[7],                     //收入比率(%)
        tkCommFee: pic[8],                  //佣金
        nick: pic[9],                       //卖家旺旺
        zkPrice: pic[10],                    //价格
        shortTaokeLinkUrl: pic[11],          //淘宝客短链接(300天内有效)
        taokeLinkUrl: pic[12],               //淘宝客链接
        wash: pic[13],                       //淘口令
        couponTotalCount: pic[14],           //优惠券总量
        couponLeftCount: pic[15],            //优惠券剩余量
        couponInfo: pic[16],                 //优惠券面额
        couponEffectiveStartTime: pic[17],   //优惠券开始时间
        couponEffectiveEndTime: pic[18],     //优惠券结束时间
        couponLinkUrl: pic[19],              //优惠券链接
        couponWash: pic[20],                 //优惠券淘口令(30天内有效)
        shortCouponLinkUrl: pic[21],         //优惠券短链接(300天内有效)
        isMarketing: pic[22],                //是否为营销计划商品
    });
    //保存数据库
    wkg.save(function(err) {
        if (err) {
            console.log(objAary + '  --> 保存失败')
            return;
        }
        //console.log('meow');
    });
}

function connect(datas ,res){
    mongoose.connect(config.dburl).then((db)=>{
        datas.forEach((line ,index)=>{
            if(!index)  return;
            (function(lines){
                parseData(lines);
            })(line)
        });
    });

    
}


module.exports = router;
