// pages/my_crowedfund/crowedfund.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    lock: false,
    pageNum: 1,
    empty: false,
    dataList: [{
      "topic_id": "1010000035075",
      "user_id": "1320000292740",
      "content": {
        "txt": "@景甜 你和张继科是什么时候开始的？"
      },
      "created_at": "3天前",
      "name": "falcom520",
      "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
    }, {
        "topic_id": "1010000035075",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "created_at": "3天前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
      }, {
        "topic_id": "1010000035075",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "created_at": "3天前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
      }, {
        "topic_id": "1010000035075",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "created_at": "3天前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
      }, {
        "topic_id": "1010000035075",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "created_at": "3天前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
      }, {
        "topic_id": "1010000035075",
        "user_id": "1320000292740",
        "content": {
          "txt": "@景甜 你和张继科是什么时候开始的？"
        },
        "created_at": "3天前",
        "name": "falcom520",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
      }]
  },



  //跳转到问题详情
  questionDetail: function(res) {
    if (this.data.lock) {
      return;
    }

    var temTopicId = res.currentTarget.dataset.topicid;
    wx.navigateTo({
      url: '../my_crowedfund_detail/detail?topicId=' + temTopicId
    })
  },

  touchend: function() {
    if (this.data.lock) {
      //开锁
      setTimeout(() => {
        this.setData({
          lock: false
        });
      }, 100);
    }
  },


  //个人信息
  personInfo: function(res) {

    if (this.data.lock) {
      return;
    }

    var tempUserId = res.currentTarget.dataset.userid;
    wx.navigateTo({
      url: '../my_info/info?userId=' + tempUserId
    })
  },

  //取消收藏
  cancelCollect: function(options) {
    var tempTopicId = options.currentTarget.dataset.topicid;
    var index = options.currentTarget.dataset.index;
    console.log(tempTopicId);
    var _this = this;

    //锁住
    this.setData({
      lock: true
    });

    console.log('触发了 longtap')

    wx.showModal({
      title: '提示',
      content: '确定要移除收藏么？',
      success: function(res) {
        //删除
        wx.request({
          url: app.globalData.domainUrl + '/user/delfav.html',
          method: 'POST',
          header: {
            'content-type': 'application/json',
            'Cookie': wx.getStorageSync("sessionid") //读取cookie
          },
          data: {
            at: app.globalData.userInfo.at,
            topic_id: tempTopicId,
          },
          success: function(res) {
            console.log(res.data);
            var errCode = res.data.errCode;
            if (errCode == 0) {
              //删除成功
              wx.showToast({
                title: '删除成功',
              })

              var tempDataList = _this.data.dataList;
              tempDataList.splice(index, 1);
              _this.setData({
                dataList: tempDataList
              })

              var totalDataList = _this.data.dataList;

              if (totalDataList.length <= 0) {
                _this.setData({
                  empty: true,
                })
              } else {
                _this.setData({
                  empty: false,
                })
              }

            } else {
              //删除失败
              wx.showToast({
                title: '删除失败',
              })
            }
            _this.setData({
              //dataList: res.data.data.dataList
            })
          }
        })
      },
      complete: function(res) {
        _this.setData({
          lock: false
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCollectList();
  },

  getCollectList: function() {
    var _this = this;
    //请求收藏的话题
    wx.request({
      url: app.globalData.domainUrl + '/my/favorite.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        page: _this.data.pageNum
      },

      success: function(res) {
        console.log(res.data.data.dataList);

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
  onReachBottom: function() {
    this.data.pageNum++;
    this.getCollectList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})