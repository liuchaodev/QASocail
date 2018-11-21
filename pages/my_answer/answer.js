// pages/home_trend/trend.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    tabArray: ["tab1", "tab2"],
    dataList: [
      {
        "topic_id": "1010000035075",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "reply_content": "",
        "comment_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "red_heart": "2.00",
        "is_hide": "0",
        "is_del": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "4小时前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "景甜",
        "r_img_url": "http://tvax4.sinaimg.cn/crop.0.0.1242.1242.50/4bb7eaf9ly8fdgoh8tn51j20yi0yitc0.jpg"
      },
      {
        "topic_id": "1010000034730",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "reply_content": "",
        "comment_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "red_heart": "2.00",
        "is_hide": "0",
        "is_del": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "4小时前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "景甜",
        "r_img_url": "http://tvax4.sinaimg.cn/crop.0.0.1242.1242.50/4bb7eaf9ly8fdgoh8tn51j20yi0yitc0.jpg"
      },
      {
        "topic_id": "1010000033385",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "reply_content": "",
        "comment_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "red_heart": "2.00",
        "is_hide": "0",
        "is_del": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "4小时前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "景甜",
        "r_img_url": "http://tvax4.sinaimg.cn/crop.0.0.1242.1242.50/4bb7eaf9ly8fdgoh8tn51j20yi0yitc0.jpg"
      },
      {
        "topic_id": "1010000032040",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你拍的第一部电影叫什么名字？"
        },
        "reply_content": "",
        "comment_num": "0",
        "like_num": "0",
        "forward_num": "0",
        "red_heart": "2.00",
        "is_hide": "0",
        "is_del": "0",
        "is_reply": "0",
        "reply_at": "0",
        "created_at": "4小时前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
        "r_name": "景甜",
        "r_img_url": "http://tvax4.sinaimg.cn/crop.0.0.1242.1242.50/4bb7eaf9ly8fdgoh8tn51j20yi0yitc0.jpg"
      }
    ],
    empty: false,
  },

  questionDetail: function () {
    wx.navigateTo({
      url: '../question_detail/question'
    })
  },
 
  personInfo: function (res) {
    var tempUserId = res.currentTarget.dataset.userid;
    wx.navigateTo({
      url: '../my_info/info?userId=' + tempUserId
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAnsweredList();
  },

  /**
   * 我的回答列表
   */
  getAnsweredList(){
    var _this = this;
    wx.request({
      url: app.globalData.domainUrl + '/my/getTopics.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        tag: 1,
        c: 1
      },

      success: function (res) {
        console.log(res.data);
        var errCode = res.data.errCode;
        var tempDataList = res.data.data.dataList
        if (errCode == 0) {


          //分页
          if (_this.data.pageNum == 1) {
            _this.setData({
              dataList: tempDataList
            })
          } else {

            var contentNew = [];
            contentNew = _this.data.dataList;

            for (var i = 0; i < tempDataList.length; i++) {
              contentNew.push(tempDataList[i])
            }
            _this.setData({
              dataList: contentNew
            })
          }

          var totalDataList = _this.data.dataList;

          if (totalDataList.length <= 0) {
            _this.setData({
              empty: true,
            })
          } else {

            //控制显示不显示没有更多数据
            if (tempDataList.length > 0) {
              _this.setData({
                noMoreData: false,
              })
            } else {
              _this.setData({
                noMoreData: true,
              })
            }

            _this.setData({
              empty1: false,
            })
          }

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