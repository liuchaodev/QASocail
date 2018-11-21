// pages/home/my.js

// components/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToMyInfo: function () {
      wx.navigateTo({
        url: '../my_info/info'
      })
    },
    goToWallet: function () {
      wx.navigateTo({
        url: '../my_wallet/wallet'
      })
    },
    goToCrowedFund: function () {
      wx.navigateTo({
        url: '../my_crowedfund/crowedfund'
      })
    },
    goToAsk: function () {
      wx.navigateTo({
        url: '../my_ask/ask'
      })
    },
    goToAnswer: function () {
      wx.navigateTo({
        url: '../my_answer/answer'
      })
    },
    goToAttention: function () {
      wx.navigateTo({
        url: '../my_attention/attention'
      })
    },
    goToCollect: function () {
      wx.navigateTo({
        url: '../my_collect/collect'
      })
    },
    goToPlatForm: function () {
      wx.navigateTo({
        url: '../my_platform/platform'
      })
    },
    goToAbout: function () {
      wx.navigateTo({
        url: '../my_about/about'
      })
    },
    goToTrade: function () {
      wx.navigateTo({
        url: '../my_trade/trade'
      })
    },
    goToFeedback:function(){
      wx.navigateTo({
        url: '../feedback/feedback'
      })
    }
  }
})


