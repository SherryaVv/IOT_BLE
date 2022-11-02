//index.js
//获取应用实例
// const app = getApp()
const app = getApp();

Page({
    data: {
        tabs: [{
                id: 0,
                name: "当前病人",
                isactive: true
            },
            {
                id: 1,
                name: "近期数据",
                isactive: false
            }
        ],
        my_doc:{downloadimgs:["../../icon/1.jpg"],text:"赵医生"},
        flag: app.globalData.haveFlag
    },
    onLoad(){
        this.setData({
          flag:app.globalData.haveFlag
        })
    },
    itemChange(e) {
        //console.log(e);
        const { index } = e.detail;
        let tabs = this.data.tabs;
        tabs.forEach((v, i) => i === index ? v.isactive = true : v.isactive = false);
        this.setData({
            tabs
        })
    },
    toChat: function(){
        wx.navigateTo({
            url: '../chat/chat'
          })
    },
    //  点击tabbar跳转函数
    //  flag是参数 flag 1：医生；2： 病人
    goIndex: function(){
        wx.redirectTo({
          url: `../index/index?flag=${this.data.flag}`
        })
      },
      goList: function(){
        wx.redirectTo({
          url: `../catelog/catelog?flag=${this.data.flag}`
        })
      },
      goSearch: function(){
        wx.redirectTo({
          url: `../search/search?flag=${this.data.flag}`
        })
      },
      goCenter: function(){
        wx.redirectTo({
          url: `../login/login?flag=${this.data.flag}`
        })
      }
})