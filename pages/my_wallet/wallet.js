// pages/my_wallet/wallet.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      "name": "falcom520",
      "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
      "content": "关注LinuxTone.Org，最近迷恋Erlang，大数据实时分析，个性化推荐",
      "level_up": "跑龙套",
      "is_bigV": "0",
      "sex": "男",
      "red_heart": "719.400",             //红心数量
      "withdraw_address": "",             //充值地址
      "user_id": "1320000292740",
      "rmb": "5100.22"                        //换算成人民币的价格
    },
    pageNum:1,
    units:[
      {
        url:'../../image/unit1.jpg',
        name:"中国红十字会",
        star_num:"已有200000颗星星"
      }, {
        url: '../../image/unit2.jpg',
        name: "中国慈善总会",
        star_num: "已有200000颗星星"
      },
      {
        url: '../../image/unit3.jpg',
        name: "北京仁爱慈善总会",
        star_num: "已有200000颗星星"
      }, {
        url: '../../image/unit1.jpg',
        name: "贫困顶梁柱保障行动",
        star_num: "已有200000颗星星"
      }, {
        url: '../../image/unit2.jpg',
        name: "中国红十字会",
        star_num: "已有200000颗星星"
      }
    ]
  },
  goToRecharge:function(){
    wx.navigateTo({
      url: '../my_wallet_recharge/recharge'
    })
  },
  goToCharityDetail:function(){
    wx.navigateTo({
      url: '../my_wallet_charity/charity'
    })
  },

  //获取用户信息
  getUserInfo:function(){
    var _this = this;

    wx.request({
      url: app.globalData.domainUrl + '/my/wallet.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        page: _this.data.pageNum
      },

      success: function (res) {
        console.log(res.data);
        var tempUserInfo = res.data.data.userInfo;
        _this.setData({
          userInfo: tempUserInfo
        })
      }
    })
  },

  goToCash:function(){
    wx.navigateTo({
      url: '../my_wallet_money/money'
    })
  },
  //获取慈善单位列表（存在问题）
  getCharityUnits:function(){
    var _this = this;

    wx.request({
      url: app.globalData.domainUrl + '/main/getCommunity.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        page: _this.data.pageNum
      },

      success: function (res) {
        console.log(res.data);
       
        _this.setData({
          
        })
      }
    })
  },

  //获取慈善单位详情（由于获取慈善单位列表存在问题，所以未调试）
  goToCharityUnitDetail:function(res){
      var charityId  = res.id;

    var _this = this;

    wx.request({
      url: app.globalData.domainUrl + '/main/communityDetail.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        id: charityId
      },

      success: function (res) {
        console.log(res.data);

        _this.setData({

        })
      }
    })
  },

  /**
   * 我的钱包接口-钱包内容未解析完成
   */
  onLoad: function (options) {
    //获取用户信息
    this.getUserInfo();
    //获取慈善单位列表
    this.getCharityUnits();
  },

 

})