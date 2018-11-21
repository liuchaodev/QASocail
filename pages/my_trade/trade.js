// pages/my_trade/trade.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tradeList: [{
      "typ_id": "提问消费",
      "amount": "2.000",
      "remark": "提问",
      "created_at": "2018-05-30 21:36:56",
      "inout": "0"                    //0为出帐-，1为进账+
    },
      {
        "typ_id": "提问消费",
        "amount": "2.000",
        "remark": "提问",
        "created_at": "2018-05-30 21:34:59",
        "inout": "0"
      },
      {
        "typ_id": "众筹奖励",
        "amount": "0.100",
        "remark": "众筹围观奖励",
        "created_at": "2018-05-04 08:49:53",
        "inout": "1"
      },
      {
        "typ_id": "众筹奖励",
        "amount": "0.200",
        "remark": "众筹围观奖励",
        "created_at": "2018-05-04 08:49:53",
        "inout": "1"
      }],
    pageNum: 1,
    empty: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tradeList();
  },

  //交易记录
  tradeList:function(){
    var _this = this;
    //交易记录
    wx.request({
      url: app.globalData.domainUrl + '/my/wallet.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        page: _this.data.pageNum
      },

      success: function (res) {
        console.log(res.data);
        var errCode = res.data.errCode;
        var tempDataList = res.data.data.dataList
        if (errCode == 0) {

          //分页
          if (_this.data.pageNum == 1) {
            _this.setData({
              tradeList: tempDataList
            })
          } else {

            var contentNew = [];
            contentNew = _this.data.dataList;

            for (var i = 0; i < tempDataList.length; i++) {
              contentNew.push(tempDataList[i])
            }
            _this.setData({
              tradeList: contentNew
            })
          }

          var totalDataList = _this.data.tradeList;

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

        } else {
          wx.showToast({
            title: res.data.errMsg,
          })
        }
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.pageNum++;
    this.tradeList();
  },


})