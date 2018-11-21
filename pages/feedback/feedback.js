// pages/home/question.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    mobile:"",
    content: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    app.addListener(function (changedData) {
      console.log(changedData);
      _this.setData({
        atPerson: changedData
      })
    });
  },

  atSomebody: function (options) {
    wx.navigateTo({
      url: '../star_list/star?from=1',
    })
  },

  inputName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  inputMobile: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },


  inputContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },


  //提交反馈（存在问题，返回错误）
  submitFeedback: function () {

    var _this = this;
    console.log(this.data.name + "---" + this.data.content)

    wx.request({
      url: app.globalData.domainUrl + '/feedback/commit.html',

      method: 'POST',

      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },

      data: {
        at: app.globalData.userInfo.at,
        content: _this.data.content,
        name: _this.data.name,
        mobile: _this.data.mobile,
      },

      success: function (res) {
        console.log(res.data);

        var errCode = res.data.errCode;
        var message = res.data.errMsg;

        if (errCode == 0) {
          //反馈成功
          wx.navigateBack({
            delta: 1
          })
          wx.showToast({
            title: '反馈成功',
          })
        } else {
          //返回失败
          wx.showToast({
            title: message,
          })
        }
      }
    })
  },

})