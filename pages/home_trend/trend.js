// pages/home_trend/trend.js
const app = getApp();
var timer = require('../../plugin/wxTimer.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 1,
    pageNum1:1,
    pageNum2:1,
    noMoreData1:false,
    noMoreData2: false,
    tabArray: ["tab1", "tab2"],
    askmelist: [{
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
      }],
    iasklist: [{
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
      }],
    wxTimerList: {},
    empty1: false,
    empty2: false,
    goodsList: [{ actEndTime: '2018-05-01 10:00:43' },
      { actEndTime: '2018-10-01 11:00:00' },
      { actEndTime: '2018-10-01 12:45:56' },
      { actEndTime: '2018-07-01 15:00:23' },
      { actEndTime: '2018-05-23 17:00:22' },
      { actEndTime: '2018-05-14 19:00:44' },
      { actEndTime: '2018-05-21 21:00:34' },
      { actEndTime: '2018-06-17 09:00:37' },
      { actEndTime: '2018-03-21 05:00:59' },
      { actEndTime: '2018-04-19 07:00:48' },
      { actEndTime: '2018-04-28 03:00:11' }],
    countDownList: [],
    actEndTimeList: []
  },

  //切换头部导航
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

  //回答问题
  answerQuestion:function(){
    wx.navigateTo({
      url: '../home_question_detail/detail',
    })
  },

  //个人信息
  personInfo: function () {
    wx.navigateTo({
      url: '../my_info/info'
    })
  },

  //话题详情
  questionDetail:function(res){
    var temTopicId = res.currentTarget.dataset.topicid;
    wx.navigateTo({
      url: '../my_crowedfund_detail/detail?topicId=' + temTopicId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.askMeQuery();
    this.iAskQuery();
    var goodsList = this.data.goodsList;
    var endTimeList = [];
    goodsList.forEach(o => { endTimeList.push(o.actEndTime) })
    this.setData({ actEndTimeList: endTimeList });
    // 执行倒计时函数
    this.countDown();
  },


  timeFormat:function(param) {//小于10的格式化函数
    return param < 10 ? '0' + param : param;
  },

  countDown:function() {//倒计时函数
    // 获取当前时间，同时得到活动结束时间数组
    var newTime = new Date().getTime();
    var endTimeList = this.data.actEndTimeList;
    var countDownArr = [];

    // 对结束时间进行处理渲染到页面
    endTimeList.forEach(o => {
      var endTime = new Date(o).getTime();
      var obj = null;
      // 如果活动未结束，对时间进行处理
      if (endTime - newTime > 0) {
  
       
        var time = (endTime - newTime) / 1000;
        // 获取天、时、分、秒
        var day = parseInt(time / (60 * 60 * 24));
        var hou = parseInt(time % (60 * 60 * 24) / 3600);
        var min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        var sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        obj = {
          day: this.timeFormat(day),
          hou: this.timeFormat(hou),
          min: this.timeFormat(min),
          sec: this.timeFormat(sec)
        }
      } else {//活动已结束，全部设置为'00'
        obj = {
          day: '00',
          hou: '00',
          min: '00',
          sec: '00'
        }
      }
      countDownArr.push(obj);
    })
    // 渲染，然后每隔一秒执行一次倒计时函数
    this.setData({ countDownList: countDownArr })
    setTimeout(this.countDown, 1000);
  },


  //问我的列表查询 tab1
  askMeQuery:function(){
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
        tag: 1,
        page: _this.data.pageNum1
      },
      success: function (res) {
        console.log(res);
        var tempTopicList = [];
        tempTopicList = res.data.data.dataList;

        //分页
        if (_this.data.pageNum == 1) {
          _this.setData({
            askmelist: tempTopicList
          })
        } else {

          var contentNew = [];
          contentNew =_this.data.askmelist;

          for (var i = 0; i < tempTopicList.length; i++) {
            contentNew.push(tempTopicList[i])
          }
          _this.setData({
            askmelist: contentNew
          })
        }


        var totalDataList = _this.data.askmelist;

        if (totalDataList.length <= 0) {
          _this.setData({
            empty1: true,
          })
        } else {

          //控制显示不显示没有更多数据
          if (tempTopicList.length > 0) {
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

       
      
      }
    })
  },

  //我问的列表查询 tab2
  iAskQuery:function(){
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
        tag: 2,
        page: _this.data.pageNum2
      },
      
      success: function (res) {
        console.log(res.data.data.dataList);
    
        var tempTopicList = [];
        tempTopicList = res.data.data.dataList;
        //分页
        if (_this.data.pageNum == 1) {
          _this.setData({
            iasklist: tempTopicList
          })
        } else {

          var contentNew =[];
          contentNew = _this.data.iasklist;

          for (var i = 0; i < tempTopicList.length; i++) {
            contentNew.push(tempTopicList[i])
          }
          _this.setData({
            iasklist: contentNew
          })
        }


        var totalDataList = _this.data.iasklist;

        if (totalDataList.length <= 0) {
          _this.setData({
            empty2: true,
          })
        } else {

          //控制显示不显示没有更多数据
          if (tempTopicList.length > 0) {
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
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.currentTab==1){
      this.data.pageNum1++;
      this.askMeQuery();
    }else{
      this.data.pageNum2++;
      this.iAskQuery();
    }
  },

})