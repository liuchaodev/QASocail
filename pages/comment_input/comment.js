// pages/comment_input/comment.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicId: "",
    content:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var tempTopicId = options.topicId;
    this.setData({
      topicId: tempTopicId
    })
  },

  //监听输入内容
  bindinput: function(e) {
    this.setData({
      content: e.detail.value
    })
  },

  //发布评论 （登陆校验有问题，返回请登陆）
  commitComment: function(e) {
    var _this = this;

    console.log("评论功能登陆信息：");
    console.log(app.globalData.userInfo.at)
   
    wx.request({
      url: app.globalData.domainUrl + '/user/comment.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        topic_id: _this.data.topicId,
        content: _this.data.content,
        is_class: "txt",
        parent_id: "0",
        typ_id: "0"
      },
      success: function(res) {
        console.log(res.data);
        var errCode = res.data.errCode;
        if(errCode == 0){
          //评论成功
          app.setChangedData('comment-data');

          wx.navigateBack({
            delta: -1
          });
        }else{
          //评论失败
          wx.showToast({
            title: '评论失败',
          })
        }
        _this.setData({
          //dataList: res.data.data.dataList
        })
      }
    })
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