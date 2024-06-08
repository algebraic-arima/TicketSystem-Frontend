<template>
  <div>
<!--    <h2>Welcome to venillalemon's Ticket System</h2>-->
    <button @click="is_add = !is_add">{{ is_add ? "我要登录" : "我要创建新用户" }}</button>
    <div v-if="is_add">
      <p>用户名 <input type="text" v-model="username"></p>
      <p>密码 <input type="password" v-model="password"></p>
      <p>确认密码<input type="password" v-model="password2"></p>
      <button @click="add_user">注册</button>
    </div>
    <div v-else>
      <p>用户名 <input type="text" v-model="username"></p>
      <p>密码 <input type="password" v-model="password"></p>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_add: true,
      username: '',
      password: '',
      password2: '',
    };
  },
  methods: {
    add_user() {
      if (this.password !== this.password2) {
        alert("两次密码不一致");
        return;
      }
      this.$axios({
        method: 'post',
        url: "http://localhost:8090/about",
        data: {
          string: "[" + (this.timestamp) + "] add_user -u " + this.username + " -p " + this.password
        },
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {
        console.log(response.string);
        this.result = response.data.string;
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>
