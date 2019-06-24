<template>
  <div id="app" v-if="this.userInfo.nickname">
    <p>nickname: {{userInfo.nickname}}</p>
    <p>mobile: {{userInfo.mobile}}</p>
    <a href="#" @click="logout">退出</a>
    <a href="#" @click="login">退出</a>
  </div>
</template>

<script>
// import {getUserApi} from './apis/login'
// import config from './config'
export default {
  name: 'app',
  components: {
  },
  created () {
    this.getUserInfo()
  },
  data () {
    return {
      userInfo: {

      }
    }
  },
  methods: {
    // getUserInfo(){
    //   getUserApi()
    //           .then( res => {
    //             this.userInfo = res.data;
    //             window.console.log('userInfo',res);
    //           })
    //           .catch(error => window.console.log('user error', error))
    // },
    // login(){
    //
    // },
    // logout(){
    //   window.location.href=`${config.baseUrl}/api/logout?return_to=${encodeURIComponent(config.baseUrl)}`;
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
