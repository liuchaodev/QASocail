// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: ['../../image/banner.jpg', '../../image/banner.jpg', '../../image/banner.jpg'],
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    indicatorColor: "#ffffff",
    indicatorActiveColor: "#aaaaaa",
    duration: 1000,
    nextmargin: 20,

    asklist: [{
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        question: " 聪聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "小破孩",
        question: " 思聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      },

      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        question: " 思聪，你见多识广，怎么才能火眼金睛的从白莲花的外表看出绿色",
      },

    ],

  },

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