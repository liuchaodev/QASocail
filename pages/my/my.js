// pages/home/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

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