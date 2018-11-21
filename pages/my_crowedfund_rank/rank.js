// pages/my_attention/attention.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attentionPerson: [
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        percent: "20%",
        rank: 1
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "二狗子",
        percent: "20%",
        rank: 2
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        percent: "20%",
        rank: 3
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        percent: "20%",
        rank: 4
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        percent: "20%",
        rank: 5
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "二狗子",
        percent: "20%",
        rank: 6
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        percent: "20%",
        rank: 7
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        percent: "20%",
        rank: 8
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var tempTopicId = options.topicId;
    this.crowedList(tempTopicId);
  },

  //众筹列表
  crowedList:function(topicId){
    var _this = this;
    wx.request({
      url: app.globalData.domainUrl + '/main/crowd.html',

      method: 'POST',

      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        topicId: topicId
      },

      success: function (res) {
        console.log(res.data);
       
        _this.setData({
        
        })
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