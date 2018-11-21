// pages/home_trend/trend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    headurl: '../../image/header_icon1.png',
    nickname: "木小孩",
    question: " 聪聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
    comments: [{
        headurl: '../../image/header_icon3.png',
        nickname: "木小孩",
        comment: "我天生就会这个问题，没办法",
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      }, {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      }, {
        headurl: '../../image/header_icon3.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      }, {
        headurl: '../../image/header_icon2.png',
        nickname: "木小孩",
        comment: "我天生就会这个问题，没办法",


      },{
        headurl: '../../image/header_icon3.png',
        nickname: "木小孩",
        comment: "我天生就会这个问题，没办法",
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      }, {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      }, {
        headurl: '../../image/header_icon3.png',
        nickname: "木小孩",
        comment: "我天生就会这个问题，没办法",
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      }, {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "木小孩",
        comment: "回答孰能生巧，不用谢谢我",


      }, 
    ]


  },

  swichNav: function(e) {
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

  personInfo: function() {
    wx.navigateTo({
      url: '../my_info/info'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})