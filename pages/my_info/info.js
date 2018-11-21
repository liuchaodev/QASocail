// pages/my_info/info.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    userInfo: {
      "name": "falcom520",
      "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
      "content": "关注LinuxTone.Org，最近迷恋Erlang，大数据实时分析，个性化推荐",
      "level_up": "跑龙套", //头衔
      "is_bigV": "0",//时候大V
      "sex": "1", //性别
      "red_heart": "12", //红心数
      "follower_num": "1",//关注数
      "rank": "0", //排名
      "fans_num": "0", //粉丝数
      "topic_num": "4", //发布话题数
      "comment_num": "0", //发表评论数
      "like_num": "0", //点赞数
      "reply_num": "0", //回复数
      "atme_num": "0", //被@次数
      "user_id": "1320000292740" //用户UID
    },
    askmelist: [
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        question: " 聪聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        question: " 聪聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        question: " 聪聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        question: " 聪聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        question: " 聪聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      }
    ]
  },

  swichNav: function (e) {
    var that = this;
    console.log(e.currentTarget.id)
    if (this.data.currentTab === e.currentTarget.id) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.id
      })
    }
  },  
  questionDetail: function () {
    wx.navigateTo({
      url: '../question_detail/question'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var userId = options.userId;
    wx.request({
      url: app.globalData.domainUrl + '/main/userInfo.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        user_id: userId
      },

      success: function (res) {
        console.log(res.data.data.userInfo);
        var errCode = res.data.errCode;
        var tempUserInfo = res.data.data.userInfo
        if (errCode == 0) {
          _this.setData({
            //userInfo: tempUserInfo
          })
        } else {
          wx.showToast({
            title: res.data.errMsg,
          })
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})