// pages/my_crowedfund/crowedfund.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:1,
    noMoreData:false,
    dataList: [{
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
      }]
  },


  /**
   * 问题详情
   */
  questionDetail: function (res) {
    var temTopicId = res.currentTarget.dataset.topicid;
    wx.navigateTo({
      url: '../my_crowedfund_detail/detail?topicId=' + temTopicId
    })
  },

  /**
   * 个人信息
   */
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
    this.crowedFundQuery();
  },


  //众筹列表
  crowedFundQuery: function () {
    var _this = this;
    //1为问我的，2为我问的，3为我参与众筹的，4为已回答的（包括问我的和我问的）
    wx.request({
      url: app.globalData.domainUrl + '/my/getTopics.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        tag: 3,
        page: _this.data.pageNum
      },
      success: function (res) {

        console.log(res.data);
        var tempDataList = res.data.data.dataList;

        //分页
        if (_this.data.pageNum == 1) {
          _this.setData({
            dataList: tempDataList,
          })
        } else {

          var contentNew = [];
          contentNew = _this.data.dataList;

          for (var i = 0; i < tempDataList.length; i++) {
            contentNew.push(tempDataList[i])
          }
          _this.setData({
            dataList: contentNew,
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
            empty: false,
          })
        }
      }
    })
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
    this.data.pageNum++;
    this.crowedFundQuery();
  },

})