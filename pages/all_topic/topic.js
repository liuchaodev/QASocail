// pages/home_trend/trend.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    noMoreData: false,
    tabArray: ["tab1", "tab2"],
    pageNum1: 1,
    pageNum2: 1,
    answeredList: [{
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
          "txt": ""
        },
        "reply_content": {
          "txt": "@景甜 你和张继科是什么时候开始的？",
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
      },],
    unAnsweredList: [{
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
          "txt": "%40%E6%99%AF%E7%94%9C+%E4%BD%A0%E5%92%8C%E5%BC%A0%E7%BB%A7%E7%A7%91%E6%98%AF%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%BC%80%E5%A7%8B%E7%9A%84%EF%BC%9F"
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
      },],
    empty1:false,
    empty2:false
  },

  /**
   * 切换导航
   */
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

  //已回答列表
  answered: function () {
    var _this = this;
    
    wx.request({
      url: app.globalData.domainUrl + '/main/getTopics.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        c: 0,
        ir: 1,
        page: _this.data.pageNum1
      },

      success: function (res) {

        var errCode = res.data.errCode;
        var tempDataList = res.data.data.dataList

        if (errCode == 0) {

          //分页
          if (_this.data.pageNum == 1) {
            _this.setData({
              answeredList: tempDataList
            })
          } else {

            var contentNew = [];
            contentNew = _this.data.answeredList;

            for (var i = 0; i < tempDataList.length; i++) {
              contentNew.push(tempDataList[i])
            }

            _this.setData({
              answeredList: contentNew
            })
          }

          var totalDataList = _this.data.answeredList;

          if (totalDataList.length<=0){
              _this.setData({
                empty1:true,
              })
          }else{

            //控制显示不显示没有更多数据
            if (tempDataList.length > 0) {
              _this.setData({
                noMoreData1: false,
              })
            } else {
              _this.setData({
                noMoreData1: true,
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



  //未回答列表
  unAnswered: function () {
    var _this = this;
    //1为问我的，2为我问的，3为我参与众筹的，4为已回答的（包括问我的和我问的）
    wx.request({
      url: app.globalData.domainUrl + '/main/getTopics.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        c: 0,
        ir:0,
        page: _this.data.pageNum2
      },
      success: function (res) {

        console.log(res.data);
        var errCode = res.data.errCode;
        var tempDataList = res.data.data.dataList


        if (errCode == 0) {

          //分页
          if (_this.data.pageNum == 1) {
            _this.setData({
              unAnsweredList: tempDataList
            })
          } else {

            var contentNew = [];
            contentNew = _this.data.unAnsweredList;

            for (var i = 0; i < tempDataList.length; i++) {
              contentNew.push(tempDataList[i])
            }
            _this.setData({
              unAnsweredList: contentNew
            })
          }


          var totalDataList = _this.data.unAnsweredList;

          if (totalDataList.length <= 0) {
            _this.setData({
              empty2: true,
            })
          } else {

            //控制显示不显示没有更多数据
            if (tempDataList.length > 0) {
              _this.setData({
                noMoreData2: false,
              })
            } else {
              _this.setData({
                noMoreData2: true,
              })
            }

            _this.setData({
              empty2: false,
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tempCurrentTab = options.currentTab;
    if (tempCurrentTab == undefined) {
      tempCurrentTab = 1;
    }

    this.setData({
      currentTab: tempCurrentTab
    })

    this.answered();
    this.unAnswered();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var tempCurrentTab = this.data.currentTab;
    if (tempCurrentTab == 1) {
      this.data.pageNum1++;
      this.answered();
    } else {
      this.data.pageNum2++;
      this.unAnswered();
    }
  }


})