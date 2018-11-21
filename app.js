//app.js

App({

  addListener: function (callback) {
    this.callback = callback;
  },

  setChangedData: function (data) {
    this.data = data;
    if (this.callback != null) {
      this.callback(data);
    }
  },
  
  onLaunch: function() {
    // 展示本地存储能
    
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)



    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
    
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: {
      "name": "falcom520", //用户昵称
      "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",//用户头像
      "content": "关注LinuxTone.Org，最近迷恋Erlang，大数据实时分析，个性化推荐",//用户介绍
      "level_up": "1",//用户等级
      "sex": "男",//性别
      "is_bigV": "0",//是否大V
      "red_heart": "5",//红心数量
      "follower_num": "0",//关注数量
      "rank": "0",//排名
      "withdraw_address": "",
      "recharge_address": "",
      "fans_num": "0", //粉丝数
      "topic_num": "4", //发布话题数
      "comment_num": "0", //发表评论数
      "like_num": "0", //点赞数
      "reply_num": "0", //回复数
      "atme_num": "0", //被@次数
      "user_id": "1320000292740", //用户UID 
      "at": "WU1tdHZqZFUxQXFaenhCWWVPa1V6Q1RVUjVOTWt0MVVXYlRST1dha2xRMVZHdWM5UFlRaTAwaWkwMGlX", //登陆app授权token，每次请求服务器信息时需要此参数
    },
    //domainUrl: "https://140.143.143.248:1443/v2.0"
    
    domainUrl: "https://hothit.weyoutech.com/v2.0"
  }
})