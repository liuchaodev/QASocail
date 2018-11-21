// pages/home/index.js
// components/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    topicList: Array
  },

  /**
   * 组件的初始数据
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
  },


  /**
   * 组件的方法列表
   */
  methods: {
    goToRank: function() {
      wx.navigateTo({
        url: '../home_rank/rank'
      })
    },

    //跳转到问题详情
    questionDetail: function(res) {
      var temTopicId = res.currentTarget.dataset.topicid;
      wx.navigateTo({
        url: '../my_crowedfund_detail/detail?topicId=' + temTopicId
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

    personInfo: function(res) {
      var tempUserId = res.currentTarget.dataset.userid;
      wx.navigateTo({
        url: '../my_info/info?userId=' + tempUserId
      })
    },

    goToFamous: function() {
      wx.navigateTo({
        url: '../star_list/star'
      })
    },

    goToAllTopics: function() {
      wx.navigateTo({
        url: '../all_topic/topic'
      })
    },


    onGotUserInfo: function(e) {
      console.log("nickname=" + e.detail.userInfo.nickName);
      console.log("nickname=" + e.detail.userInfo.avatarUrl);
    }
  }
})