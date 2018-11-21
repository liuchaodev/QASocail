// pages/my_attention/attention.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:1,
    noMoreData:false,
    dataList: [
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        amount: "2000",
        rank: 1
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "二狗子",
        amount: "5000",
        rank: 2
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "3000",
        rank: 3
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "9000",
        rank: 4
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        amount: "1000",
        rank: 5
      },
      {
        headurl: '../../image/header_icon2.png',
        nickname: "二狗子",
        amount: "1000",
        rank: 6
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "900",
        rank: 7
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "800",
        rank: 8
      }, {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "3000",
        rank: 9
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "9000",
        rank: 10
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        amount: "1000",
        rank: 11
      }, {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "3000",
        rank: 12
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "9000",
        rank: 13
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        amount: "1000",
        rank: 14
      }, {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "3000",
        rank: 15
      },
      {
        headurl: '../../image/header_icon3.png',
        nickname: "王思聪",
        amount: "9000",
        rank: 16
      },
      {
        headurl: '../../image/header_icon1.png',
        nickname: "木小孩",
        amount: "1000",
        rank: 17
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRankCharity();
  },

  /**
   * 获取慈善排行榜
   */
  getRankCharity:function(){
    var _this = this;
    wx.request({
      url: app.globalData.domainUrl + '/main/getdonation.html',
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

        } else {
          wx.showToast({
            title: res.data.errMsg,
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
    this.getRankCharity();
  },

})