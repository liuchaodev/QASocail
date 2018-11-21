// pages/new_home/home.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab1scrollTop: 0,
    tab2scrollTop: 0,
    //首页
    urls: ['../../image/banner.jpg', '../../image/banner.jpg', '../../image/banner.jpg'],
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    indicatorColor: "#ffffff",
    indicatorActiveColor: "#aaaaaa",
    duration: 1000,
    nextmargin: 20,

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

    topicList: [{
      "topic_id": "1010000037765",
      "user_id": "1320000292740",
      "content": {
        "txt": "@景甜 你和张继科是什么时候开始的？"
      },
      "reply_content": {
        "txt": "",
        "img": []
      },
      "comment_num": "0",
      "simulate_num": "0",
      "like_num": "0",
      "forward_num": "0",
      "look_num": "0",
      "red_heart": "2.00",
      "crowd_funding": "0",
      "is_reply": "0",
      "reply_at": "0",
      "created_at": "10天前",
      "name": "falcom520",
      "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
      "r_name": "景甜",
      "r_img_url": "http://tvax4.sinaimg.cn/crop.0.0.1242.1242.50/4bb7eaf9ly8fdgoh8tn51j20yi0yitc0.jpg",
      "r_user_id": "1320000005725"
    },
      {
        "topic_id": "1010000036420",
        "user_id": "1320000292740",
        "content": {
          "txt": "王思聪你那么机智，能告诉我如何提出一个牛🆚的话题"
        },
        "reply_content": {
          "txt": "",
          "img": []
        },
        "comment_num": "0",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "2.00",
        "crowd_funding": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "10天前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "景甜",
        "r_img_url": "http://tvax4.sinaimg.cn/crop.0.0.1242.1242.50/4bb7eaf9ly8fdgoh8tn51j20yi0yitc0.jpg",
        "r_user_id": "1320000005725"
      },
      {
        "topic_id": "1010000035075",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "reply_content": {
          "txt": "这个问题嘛，我一会回答你",
          "audio": "https://192.168.1.4/audio/r/53/8121.m4a"
        },
        "comment_num": "6",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "2.00",
        "crowd_funding": "0",
        "is_reply": "1",
        "reply_at": "1524134346",
        "created_at": "1月前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "falcom520",
        "r_img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_user_id": "1320000292740"
      },
      {
        "topic_id": "1010000033385",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "reply_content": {
          "txt": "",
          "img": []
        },
        "comment_num": "0",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "2.00",
        "crowd_funding": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "1月前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "falcom520",
        "r_img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_user_id": "1320000292740"
      },
      {
        "topic_id": "1010000032040",
        "user_id": "1320000211795",
        "content": {
          "txt": "@景甜 你拍的第一部电影叫什么名字？"
        },
        "reply_content": {
          "txt": "",
          "img": []
        },
        "comment_num": "0",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "2.00",
        "crowd_funding": "5",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "1月前",
        "name": "李治廷",
        "img_url": "http://tvax1.sinaimg.cn/crop.0.0.1125.1125.50/af975953ly8fn21rbr8kzj20v90v9dho.jpg",
        "r_name": "古巨基LeoKu",
        "r_img_url": "http://tvax3.sinaimg.cn/crop.22.0.1081.1081.50/5a176a60ly8flsiz3dw3vj20v90u13zm.jpg",
        "r_user_id": "1320000201345"
      },
      {
        "topic_id": "1010000028660",
        "user_id": "1320000292740",
        "content": {
          "txt": "nihao alert(5);你什么时候出@王宝强 最新的@马4荣 电影啊'select @@version",
          "image": [
            "https://192.168.1.4/image/q/21/xxxxx.png",
            "https://192.168.1.4/image/q/21/88888.png"
          ]
        },
        "reply_content": {
          "txt": "",
          "img": []
        },
        "comment_num": "0",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "5.00",
        "crowd_funding": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "1月前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "falcom520",
        "r_img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_user_id": "1320000292740"
      },
      {
        "topic_id": "1010000019555",
        "user_id": "1320000292740",
        "content": {
          "txt": "nihao alert(5);你什么时候出@王宝强 最新的@马4荣 电影啊'select @@version",
          "image": [
            "https://192.168.1.4/image/q/21/xxxxx.png",
            "https://192.168.1.4/image/q/21/88888.png"
          ]
        },
        "reply_content": {
          "txt": "",
          "img": []
        },
        "comment_num": "0",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "2.00",
        "crowd_funding": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "1月前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "falcom520",
        "r_img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_user_id": "1320000292740"
      },
      {
        "topic_id": "1010000015175",
        "user_id": "1320000292740",
        "content": {
          "txt": "nihao alert(5);你什么时候出@王宝强 最新的@马4荣 电影啊'select @@version",
          "image": [
            "https://192.168.1.4/image/q/21/xxxxx.png",
            "https://192.168.1.4/image/q/21/88888.png"
          ]
        },
        "reply_content": {
          "txt": "",
          "img": []
        },
        "comment_num": "0",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "0.00",
        "crowd_funding": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "1月前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "falcom520",
        "r_img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_user_id": "1320000292740"
      },
      {
        "topic_id": "1010000013485",
        "user_id": "1320000292740",
        "content": {
          "txt": "nihao alert(5);你什么时候出@王宝强 最新的@马4荣 电影啊'select @@version",
          "image": [
            "https://192.168.1.4/image/q/21/xxxxx.png",
            "https://192.168.1.4/image/q/21/88888.png"
          ]
        },
        "reply_content": {
          "txt": "",
          "img": []
        },
        "comment_num": "0",
        "simulate_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "look_num": "0",
        "red_heart": "0.00",
        "crowd_funding": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "1月前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "falcom520",
        "r_img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_user_id": "1320000292740"
      }
    ],
    //我的页面

    //页面底部
    choose_index: 0,
    tabbar: {
      "color": "#BFBFBF",
      "selectedColor": "#F5D600",
      "borderStyle": "#F5D600",
      "backgroundColor": "#ffffff",
      "list": [{
          "key": "home",
          "iconPath": "/image/home_unselected.png",
          "selectedIconPath": "/image/home_selected.png",
          "text": "首页"
        },
        {
          "key": "new",
          "iconPath": "/image/question_selected.png",
          "iconType": "big overflow circle shadow",
          "choose": "disable",
          "text": "提问"
        },
        {
          "key": "notebook",
          "iconPath": "/image/my_unselected.png",
          "selectedIconPath": "/image/my_selected.png",
          "text": "我的"
        }
      ]
    }
  },

  //当前页面js
  tabChange: function(e) {
    var _this = this;
    console.log(e.detail.index);
    var key = e.detail.key
    if (key == 'new') {
      wx.navigateTo({
        url: '../question/question'
      })

    } else {

      this.setData({
        choose_index: e.detail.index
      })

      switch (this.data.choose_index) {
        case 0:
          wx.pageScrollTo({
            scrollTop: _this.data.tab1scrollTop,
            duration: 0
          })
          break
        case 2:
          wx.pageScrollTo({
            scrollTop: _this.data.tab2scrollTop,
            duration: 0
          })
          break
      }
    }
  },

  //我的页面js
  goToMyInfo: function() {
    wx.navigateTo({
      url: '../my_info/info'
    })
  },
  goToWallet: function() {
    wx.navigateTo({
      url: '../my_wallet/wallet'
    })
  },
  goToCrowedFund: function() {
    wx.navigateTo({
      url: '../my_crowedfund/crowedfund'
    })
  },
  goToAsk: function() {
    wx.navigateTo({
      url: '../my_ask/ask'
    })
  },
  goToAnswer: function() {
    wx.navigateTo({
      url: '../my_answer/answer'
    })
  },
  goToAttention: function() {
    wx.navigateTo({
      url: '../my_attention/attention'
    })
  },
  goToCollect: function() {
    wx.navigateTo({
      url: '../my_collect/collect'
    })
  },
  goToPlatForm: function() {
    wx.navigateTo({
      url: '../my_platform/platform'
    })
  },
  goToAbout: function() {
    wx.navigateTo({
      url: '../my_about/about'
    })
  },
  goToTrade: function() {
    wx.navigateTo({
      url: '../my_trade/trade'
    })
  },

  //首页js
  goToRank: function() {
    wx.navigateTo({
      url: '../home_rank/rank'
    })
  },

  questionDetail: function() {
    wx.navigateTo({
      url: '../question_detail/question'
    })
  },

  goToStar: function() {
    wx.navigateTo({
      url: '../home_star/star'
    })
  },

  goToTrend: function() {
    wx.navigateTo({
      url: '../home_trend/trend'
    })
  },

  goTofamous: function() {
    wx.navigateTo({
      url: '../star_list/star'
    })
  },

  personInfo: function() {
    wx.navigateTo({
      url: '../my_info/info'
    })
  },

  onPageScroll: function(res) {
    console.log(res);
    if (this.data.choose_index == 0) {
      this.setData({
        tab1scrollTop: res.scrollTop
      })

    }

    if (this.data.choose_index == 2) {
      this.setData({
        tab2scrollTop: res.scrollTop

      })

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;

        wx.request({
          url: app.globalData.domainUrl + '/login/init.html',
          method: 'POST',
          header: {
            'content-type': 'application/json',
          },
          data: {
            "method": "wx",
            "third_id": code,
            "password": code,
            "expire_in": 1523522425
          },
          success: function(res) {

            //存储全局登陆信息
            app.globalData.userInfo = res.data.data.userInfo;

            //登陆成功保存cookie
            wx.setStorageSync("sessionid", res.header["Set-Cookie"])

            console.log("=============登陆成功保存cookie==============")

            _this.setData({
              userInfo: res.data.data.userInfo
            })

            //请求热门话题
            wx.request({
              url: app.globalData.domainUrl + '/main/getTopics.html',
              method: 'POST',
              header: {
                'content-type': 'application/json',
                'Cookie': wx.getStorageSync("sessionid") //读取cookie
              },
              data: {
                at: app.globalData.userInfo.at,
                "c": 0,
                "page": 1
              },

              success: function(res) {
                var tempTopicList = [];
                tempTopicList = res.data.data.dataList;
                _this.setData({
                  topicList: tempTopicList
                })
              }
            })



            //请求个人信息
            /*wx.request({
               url: app.globalData.domainUrl + '/main/userInfo.html',
               method: 'POST',
               header: {
                 'content-type': 'application/json'
               },
               data: {
                 at: app.globalData.userInfo.at,
                 user_id: app.globalData.userInfo.user_id
               },

               success: function (res) {
                 var tempUserInfo = res.data.userInfo;
                 _this.setData({
                   userInfo: tempUserInfo
                 })
               }
             })*/
          }
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

})