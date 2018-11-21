// pages/home_star/star.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDailyLogin: 0,
    isDailyQuestion: 0,
    isDailyOther: 0,
    lastDayStar: 0,
    totalStar: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTaskInfo();
  },

  /**
   * 获取任务信息
   */
  getTaskInfo: function() {
    var _this = this;
    wx.request({
      url: app.globalData.domainUrl + '/my/task.html',

      method: 'POST',

      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },

      data: {
        at: app.globalData.userInfo.at
      },

      success: function(res) {
        console.log(res.data);
        var takList = [];
        var data = res.data.data;
        takList = res.data.data.dataList;

        var tempLastDayStar = data.lastDayStar;
        var tempTotalStar = data.totalStar;

        var tempIsDailyLogin = takList[0].is_finish;
        var tempIsDailyQuestion = takList[1].is_finish;
        var tempIsDailyOther = 0;

        var tempIsDailyCrowedFund = takList[2].is_finish;
        var tempIsDailyComment = takList[3].is_finish;
        var tempIsDailyThumbUp = takList[4].is_finish;

        if (tempIsDailyCrowedFund == 1 || tempIsDailyComment == 1 || tempIsDailyThumbUp == 1) {
          tempIsDailyOther = 1;
        }

        _this.setData({
          lastDayStar: tempLastDayStar,
          totalStar: tempTotalStar,

          isDailyLogin: tempIsDailyLogin,
          isDailyQuestion: tempIsDailyQuestion,
          isDailyOther: tempIsDailyOther,
        })

      }
    })
  },

  /**
   * 话题列表
   */
  goToTopicList: function() {
    var tempIsDailyOther = this.data.isDailyOther;
    if (tempIsDailyOther == 0) {
      wx.navigateTo({
        url: '../all_topic/topic',
      })
    }
  },

  /**
   * 去提问
   */
  goToQuestion: function() {
    var tempIsDailyQuestion = this.data.isDailyQuestion;
    if (tempIsDailyQuestion == 0) {
      wx.navigateTo({
        url: '../question/question',
      })
    }
  }

})