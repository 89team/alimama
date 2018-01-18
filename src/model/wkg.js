//
var mongoose = require('mongoose');



var Schema = mongoose.Schema; //  创建模型

var wkgScheMa = new Schema({
    auctionId: String,                  //商品id
    title: String,                      //商品名称
    pictUrl: String,                    //商品主图
    auctionUrl: String,                 //商品详情页链接地址
    shopTitle: String,                  //店铺名称
    zkPrice: String,                    //商品价格(单位：元)
    biz30day: String,                   //商品月销量
    tkRate: String,                     //收入比率(%)
    tkCommFee: String,                  //佣金
    nick: String,                       //卖家旺旺
    zkPrice: String,                    //价格
    shortTaokeLinkUrl: String,          //淘宝客短链接(300天内有效)
    taokeLinkUrl: String,               //淘宝客链接
    wash: String,                       //淘口令
    couponTotalCount: String,           //优惠券总量
    couponLeftCount: String,            //优惠券剩余量
    couponInfo: String,                 //优惠券面额
    couponEffectiveStartTime: String,   //优惠券开始时间
    couponEffectiveEndTime: String,     //优惠券结束时间
    couponLinkUrl: String,              //优惠券链接
    couponWash: String,                 //优惠券淘口令(30天内有效)
    shortCouponLinkUrl: String,         //优惠券短链接(300天内有效)
    isMarketing: String,                //是否为营销计划商品
}); 


exports.wkg = mongoose.model('team89', wkgScheMa);;