// pages/my_attention/attention.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      "user_id": "1320000123435",
      "created_at": "5分钟前",
      "name": "M鹿M",
      "img_url": "http://tvax3.sinaimg.cn/crop.13.0.614.614.50/5ba8d1cbly8fesjytq8a0j20hs0h2754.jpg"
    },
      {
        "user_id": "1320000122090",
        "created_at": "10分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "11分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000123435",
        "created_at": "5分钟前",
        "name": "M鹿M",
        "img_url": "http://tvax3.sinaimg.cn/crop.13.0.614.614.50/5ba8d1cbly8fesjytq8a0j20hs0h2754.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "10分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "11分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000123435",
        "created_at": "5分钟前",
        "name": "M鹿M",
        "img_url": "http://tvax3.sinaimg.cn/crop.13.0.614.614.50/5ba8d1cbly8fesjytq8a0j20hs0h2754.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "10分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "11分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000123435",
        "created_at": "5分钟前",
        "name": "M鹿M",
        "img_url": "http://tvax3.sinaimg.cn/crop.13.0.614.614.50/5ba8d1cbly8fesjytq8a0j20hs0h2754.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "10分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "11分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "4小时前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      }, {
        "user_id": "1320000123435",
        "created_at": "5分钟前",
        "name": "M鹿M",
        "img_url": "http://tvax3.sinaimg.cn/crop.13.0.614.614.50/5ba8d1cbly8fesjytq8a0j20hs0h2754.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "10分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "11分钟前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      },
      {
        "user_id": "1320000122090",
        "created_at": "4小时前",
        "name": "付辛博",
        "img_url": "http://tva2.sinaimg.cn/crop.0.0.512.512.50/4ca477bajw8eum4hm8uavj20e80e80t4.jpg"
      }],
    noMoreData:false,
    empty:false,
    pageNum:1,

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAttentionList();
  },

  getAttentionList:function(){
    var _this = this;
    //查询关注的人
    wx.request({
      url: app.globalData.domainUrl + '/main/follower.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        is_class: 'follower',
        user_id: app.globalData.userInfo.user_id,
        page:_this.data.pageNum
      },

      success: function (res) {
        console.log(res.data);

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


  //取消关注
  unAttention: function (res) {
    var _this = this;

    console.log(res);

    var tempUserId = res.currentTarget.dataset.userid;
    var tempIndex = res.currentTarget.dataset.index;

    var tempDataList = _this.data.dataList;

    wx.request({
      url: app.globalData.domainUrl + '/user/unfollower.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        user_id: tempUserId,
        is_class: "follower"
      },

      success: function (res) {
        console.log(res.data);
        if (res.data.errCode ==0){
          tempDataList.splice(tempIndex, 1);

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

        }else{
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
    this.getAttentionList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})