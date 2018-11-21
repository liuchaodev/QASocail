// pages/home/question.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starNum:0,
    content:"",
    atPerson:{
      name:""
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this  = this;
    app.addListener(function (changedData) {
      console.log(changedData);
      _this.setData({
        atPerson: changedData
      })
    });
  },

  atSomebody:function(options){
      wx.navigateTo({
        url: '../star_list/star?from=1',
      })
  },

  inputNum:function(e){
    this.setData({
      starNum: e.detail.value
    })
  },

  inputContent:function(e){
    this.setData({
      content: e.detail.value
    })
  },

  
  //提交话题
  submitQuestion:function(){
   
    var _this = this;
    console.log(this.data.starNum + "---" + this.data.content)

    wx.request({
      url: app.globalData.domainUrl + '/user/topics.html',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync("sessionid")//读取cookie
      },
      data: {
        at: app.globalData.userInfo.at,
        content: "@" + _this.data.atPerson.name+" "+_this.data.content,
        red_heart: _this.data.starNum,
        is_share: 1,
      },
      success: function (res) {
        console.log(res.data);

        var errCode = res.data.errCode;
        var message = res.data.errMsg;

        if(errCode==0){
          //话题发布成功，到问题列表中去查看
          wx.redirectTo({
            url: '../my_ask/ask?currentTab=2',
          })
        }else{
          //话题错误发布原因
          wx.showToast({
            title: message,
          })
        }
      }
    })
  },
  
})