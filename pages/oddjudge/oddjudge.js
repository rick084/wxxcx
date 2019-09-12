// pages/oddjudge/oddjudge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:null,
    ans:"",
  },
  jump: function (e) {
    wx.navigateBack({
      delta: 1
    })

   

  },
  jud: function () {
     if (this.data.num == 0)
    {
      this.setData({ans:"输入不能为零!"})
    }
    else if (this.data.num % 2 === 1)
    {
      this.setData({ ans: "奇数!" })
    }
    else if(this.data.num % 2 === 0)
    {
      this.setData({ ans: "偶数!" })
    }
    else{
      this.setData({ ans: "" })
    }
  },
  inp: function (e) {
    var a;
    a = e.detail.value;
    this.setData({ num: a });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})