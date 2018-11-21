// pages/star_list/star.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    //展示的数据
    from: 0, //0首页 1提问
    dataList: [ //返回数据的数组列表
      {
        "name": "楊千嬅",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.1242.1242.50/64e61b0cjw8ey7gvdol97j20yi0yjahw.jpg",
        "level_up": "1",
        "is_bigV": "1",
        "sex": "2",
        "red_heart": "0",
        "follower_num": "0",
        "rank": "0",
        "level_up": "跑龙套",
        "content": "香港知名歌手，演员"
      },
      {
        "name": "黄宗泽",
        "img_url": "http://tva1.sinaimg.cn/crop.0.0.640.640.50/65c94db2jw8ecd9p0pg8vj20hs0hs0tl.jpg",
        "level_up": "1",
        "is_bigV": "1",
        "sex": "1",
        "red_heart": "0",
        "follower_num": "0",
        "rank": "0",
        "level_up": "跑龙套",
        "content": "香港知名歌手，演员"
      },
      {
        "name": "薛凯琪",
        "img_url": "http://tvax1.sinaimg.cn/crop.9.0.493.493.50/65c178c8ly8fmhf2jnzh1j20e80dpmxd.jpg",
        "level_up": "1",
        "is_bigV": "1",
        "sex": "2",
        "red_heart": "0",
        "follower_num": "0",
        "rank": "0",
        "level_up": "跑龙套",
        "content": "香港知名歌手，演员"
      }, 
      {
        "name": "龙套1",
        "img_url": "http://tva3.sinaimg.cn/crop.0.0.1242.1242.50/64e61b0cjw8ey7gvdol97j20yi0yjahw.jpg",
        "level_up": "1",
        "is_bigV": "1",
        "sex": "2",
        "red_heart": "0",
        "follower_num": "0",
        "rank": "0",
        "level_up": "跑龙套",
        "content": "香港知名歌手，演员"
      },
      {
        "name": "路人甲",
        "img_url": "http://tva1.sinaimg.cn/crop.0.0.640.640.50/65c94db2jw8ecd9p0pg8vj20hs0hs0tl.jpg",
        "level_up": "1",
        "is_bigV": "1",
        "sex": "1",
        "red_heart": "0",
        "follower_num": "0",
        "rank": "0",
        "level_up": "跑龙套",
        "content": "香港知名歌手，演员"
      },
      {
        "name": "千颂伊",
        "img_url": "http://tvax1.sinaimg.cn/crop.9.0.493.493.50/65c178c8ly8fmhf2jnzh1j20e80dpmxd.jpg",
        "level_up": "1",
        "is_bigV": "1",
        "sex": "2",
        "red_heart": "0",
        "follower_num": "0",
        "rank": "0",
        "level_up": "跑龙套",
        "content": "香港知名歌手，演员"
      }],
    pageNum: 1,
    empty: false,
    noMoreData:false,

    //获取到的原始数据
    orginDataList: [],

    //获取到的筛选结果
    searchResult: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    var from = options.from;

    if (from != undefined){
      this.setData({
        from: from
      })
    }

    this.starList();
  },

 
  personInfo: function (res) {
    var tempUserId = res.currentTarget.dataset.userid;
    wx.navigateTo({
      url: '../my_info/info?userId=' + tempUserId
    })
  },

  starList: function() {
    var _this = this;
    //请求明星列表
    wx.request({
      url: app.globalData.domainUrl + '/main/getStar.html',

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
        console.log(res.data);
        var tempDataList = res.data.data.dataList;

        //分页
        if (_this.data.pageNum == 1) {
          _this.setData({
            dataList: tempDataList,
            orginDataList: tempDataList
          })
        } else {

          var contentNew = [];
          contentNew = _this.data.dataList;

          for (var i = 0; i < tempDataList.length; i++) {
            contentNew.push(tempDataList[i])
          }
          _this.setData({
            dataList: contentNew,
            orginDataList: contentNew
          })
        }

        var totalDataList = _this.data.orginDataList;

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

  //关注
  attention: function(res) {
    var _this = this;

    console.log(res);

    var tempUserId = res.currentTarget.dataset.userid;

    wx.request({
      url: app.globalData.domainUrl + '/user/follower.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        user_id: tempUserId
      },

      success: function(res) {
        console.log(res.data);
        var errCode = res.data.errCode;
        if (errCode == 0) {
          wx.showToast({
            title: '关注成功',
          })
        } else {
          wx.showToast({
            title: res.data.errMsg,
          })
        }
        _this.setData({

        })
      }
    })
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.data.pageNum++;
    this.starList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  wxSearchInput: function(res) {
    var _this = this;
    console.log(res.detail.value);

    var inputValue = res.detail.value;

    var tempDataList = [];
    var tempSearchResult = [];

    tempDataList = this.data.dataList;

    if (inputValue == "") {
      console.log("inputValue==null")
      _this.setData({
        dataList: _this.data.orginDataList
      })
    } else {

      wx.request({
        url: app.globalData.domainUrl + '/user/suggestStar.html',
        method: 'POST',
        header: {
          'content-type': 'application/json',
          'Cookie': wx.getStorageSync("sessionid") //读取cookie
        },
        data: {
          at: app.globalData.userInfo.at,
          kw: inputValue
        },

        success: function(res) {
          console.log(res.data);
          var errCode = res.data.errCode;
          var tempSearchResult = res.data.data.dataList
          if (errCode == 0) {
            _this.setData({
              dataList: tempSearchResult
            })

          } else {
            wx.showToast({
              title: res.data.errMsg,
            })
          }

        }
      })


    }

  },

  selectPerson: function(res) {
    console.log(res)
    if (this.data.from == 1) {
      app.setChangedData(res.currentTarget.dataset.item);
      wx.navigateBack({
        delta: -1
      });
    } else {
      //个人主页
      var userId = res.currentTarget.dataset.item.user_id;
      wx.navigateTo({
        url: '../my_info/info?userId=' + userId
      })
    }
  },

  clearContent: function(res) {
    var _this = this;
    this.setData({
      input_code: ""
    })


    this.setData({
      dataList: _this.data.orginDataList
    })


  }



})