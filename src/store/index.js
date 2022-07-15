import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }
})

// 关于Vuex版本的问题，“npm install vuex --save”命令下载的是较新版本的vuex4.0+，
// vue2.0+使用vuex3.0+，vue3.0+使用vuex4.0+，vue2.0+使用vuex4.0+会报错，如果采用跟博主一样版本的vue（2.0+）会报错。
// 先使用“npm uninstall vuex”命令卸载已安装的vuex，再使用“npm install vuex@3”命令安装指定版（3.0+）的Vuex
// 注意查看 package.json 中 vue 与 vuex 的版本兼容问题
