// pages/home_trend/trend.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: {
      "topic_id": "1010000035743",
      "user_id": "1320000292740",
      "ruser_id": "1320000292740",
      "content": {
        "txt": "@景甜 你和张继科是什么时候开始的？大家好像都想知道一下，哈哈哈哈，告诉我们吧！"
      },
      "reply_content": {
        "txt": "这个问题嘛，我一会回答你",
        "audio": "http://mmd.ai/audio/r/53/8121.m4a?k=VU0wVWp3ZEFVMXhxYU8zbENZZTVrMHR4VGJHcFdWUFFRaTAwaXVpMDBp"
      },
      "comment_num": "6",
      "like_num": "0",
      "forward_num": "0",
      "red_heart": "2.00",
      "is_reply": "1",
      "created_at": "3天前",
      "name": "falcom520",
      "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
      "r_name": "falcom520",
      "r_img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg",
      "r_user_id": "1320000201345",
      "reply_at": "",
      "is_auth": "1",
      "comments": [
        {
          "comment_id": "1030000001345",
          "parent_id": "0",
          "user_id": "1320000292740",
          "content": {
            "txt": "这是一个好主意"
          },
          "created_at": "20分钟前",
          "name": "falcom520",
          "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
        },
        {
          "comment_id": "1030000003035",
          "parent_id": "0",
          "user_id": "1320000292740",
          "content": {
            "txt": "哈哈，祝你成功"
          },
          "created_at": "18分钟前",
          "name": "falcom520",
          "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
        },
        {
          "comment_id": "1030000002690",
          "parent_id": "0",
          "user_id": "1320000292740",
          "content": {
            "txt": "期待"
          },
          "created_at": "19分钟前",
          "name": "falcom520",
          "img_url": "http://tva3.sinaimg.cn/crop.0.0.180.180.50/658b215ejw1e8qgp5bmzyj2050050aa8.jpg"
        }
      ],
      "comments_pages": 1,
      "simulates": [],	//模仿列表，返回内容格式与评论一致
      "simulate_pages": 1 //模仿列表页数
    },

    is_fav: 0,
    is_like: 0,
    like_num:0
  },

  swichNav: function(e) {
    var _this = this;
    console.log(e.currentTarget.id)
    if (this.data.currentTab === e.currentTarget.id) {
      return false;
    } else {
      _this.setData({
        currentTab: e.currentTarget.id
      })
    }
  },

  personInfo: function(res) {
    var tempUserId = res.currentTarget.dataset.userid;
    wx.navigateTo({
      url: '../my_info/info?userId=' + tempUserId
    })
  },

  //跳转到众筹详情部分
  goToCrowedFundDetail: function(e) {
    var tempTopicId = e.currentTarget.dataset.topicid;
    wx.navigateTo({
      url: '../my_crowedfund_rank/rank?topicId=' + tempTopicId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;

    this.recorderManager = wx.getRecorderManager();
    this.recorderManager.onError(function() {
      _this.tip("录音失败！")
    });
    this.recorderManager.onStop(function(res) {
      _this.setData({
        src: res.tempFilePath
      })
      console.log(res.tempFilePath)
      _this.tip("录音完成！")
    });

    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.onError((res) => {
      _this.tip("播放录音失败！")
    })

    console.log(wx.getStorageSync("sessionid"));

    var tempTopicId = options.topicId;

    app.addListener(function(changedData) {
      console.log("addListener" + changedData);
      _this.topicDetail(tempTopicId);
    });
    _this.topicDetail(tempTopicId);
  },

  topicDetail: function(tempTopicId) {
    var _this = this;
    //获取话题详情(返回的数据列表与详情不一致（replaycontent）)
    wx.request({
      url: app.globalData.domainUrl + '/main/getDetail.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        topic_id: tempTopicId
      },
      success: function(res) {
        //console.log(res.data.data.dataList);

        var tempIsFav = res.data.data.dataList.is_fav;
        var tempIsLike = res.data.data.dataList.is_like;
        var tempLike_num = res.data.data.dataList.like_num; 
        _this.setData({
          dataList: res.data.data.dataList,
          is_fav: tempIsFav,
          is_like: tempIsLike,
          like_num: tempLike_num
        })

      }
    })
  },

  //偷听话题
  listenTopic: function(res) {
    wx.showModal({
      title: '提示',
      content: '偷听这条回答需要1元',
    })
  },

  //收藏话题（登陆校验有问题，返回请登陆）
  collectTopic: function(res) {
    var _this = this;
    var tempTopicId = res.currentTarget.dataset.topicid;
    console.log("收藏功能登陆信息：")
    console.log(app.globalData.userInfo.at)

    wx.request({
      url: app.globalData.domainUrl + '/user/favorite.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        topic_id: tempTopicId
      },
      success: function(res) {
        if (res.data.errCode == 0) {
          wx.showToast({
            title: '收藏成功',
          })
          _this.setData({
            is_fav: 1
          })

        } else {
          wx.showToast({
            title: '收藏失败',
          })
        }
      }
    })
  },

  //评论话题
  commentTopic: function(res) {
    var tempTopicId = res.currentTarget.dataset.topicid;
    wx.navigateTo({
      url: '../comment_input/comment?topicId=' + tempTopicId,
    })
  },

  //点赞
  thumbUp: function(res) {
    var _this = this;
    console.log("点赞tempTopicId:");
    console.log(app.globalData.userInfo.at);
    var tempTopicId = res.currentTarget.dataset.topicid;

    console.log(tempTopicId);
    wx.request({
      url: app.globalData.domainUrl + '/user/like.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        topic_id: tempTopicId,
        comment_id: 0
      },
      success: function(res) {
        console.log(res);
        var tempErrCode = res.data.errCode;
        var tempErrMsg = res.data.errMsg;
        var tempLikeNum = _this.data.like_num;
        tempLikeNum++;
        if (tempErrCode == 0) {
          _this.setData({
            is_like: 1,
            like_num: tempLikeNum
          })
        } else {
          wx.showToast({
            title: tempErrMsg,
          })
        }
      }
    })
  },



  /**
   * 提示
   */
  tip: function(msg) {
      wx.showModal({
        title: '提示',
        content: msg,
        showCancel: false
      })
    }

    /**
     * 录制aac音频
     */
    ,
  startRecordAac: function() {
      this.recorderManager.start({
        format: 'aac'
      });
    }

    /**
     * 录制mp3音频
     */
    ,
  startRecordMp3: function() {
      this.recorderManager.start({
        format: 'mp3'
      });
    }

    /**
     * 停止录音
     */
    ,
  stopRecord: function() {
      this.recorderManager.stop()
    }

    /**
     * 播放录音
     */
    ,
  playRecord: function() {
    var _this = this;
    var src = this.data.src;
    if (src == '') {
      this.tip("请先录音！")
      return;
    }
    this.innerAudioContext.src = this.data.src;
    this.innerAudioContext.play()
  },


  /**
   * 取消录音
   */
  cancelRecord: function() {
    this.recorderManager.stop()
    this.setData({
      src: "",
    })
  },

  //上传录音
  uploadMic: function() {
    var _this = this;
    var src = this.data.src;
    var urls = app.globalData.domainUrl + "/user/upload.html";
    console.log(_this.data.src);

    wx.request({
      url: urls,
      method: 'POST',
      header: {
        'content-type': 'multipart/form-data'
      },

      data: {
        res: _this.data.src,
        at: app.globalData.userInfo.at,
        class: "audio",
        m: "r"
      },

      success: function(res) {


        _this.setData({

        })
      }
    })

    wx.uploadFile({
      url: urls,
      filePath: _this.data.src,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },

      data: {
        res: _this.data.src,
        at: app.globalData.userInfo.at,
        class: "audio",
        m: "r"
      },


      success: function(res) {
        var str = res.data;
        var data = JSON.parse(str);
        if (data.states == 1) {
          var cEditData = _this.data.editData;
          cEditData.recodeIdentity = data.identitys;
          s.setData({
            editData: cEditData
          });
        } else {
          wx.showModal({
            title: '提示',
            content: data.message,
            showCancel: false,
            success: function(res) {

            }
          });
        }
        wx.hideToast();
      },
      fail: function(res) {
        console.log(res);
        wx.showModal({
          title: '提示',
          content: "网络请求失败，请确保网络是否正常",
          showCancel: false,
          success: function(res) {}
        });
        wx.hideToast();
      }
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
})