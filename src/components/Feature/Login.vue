<template>
  <div class="login-wrapper">
    <input type="text" v-model="formData.userName" placeholder="username">
    <input type="text" v-model="formData.displayName" placeholder="displayName">
    <button class="btn-login" @click="handleLoginByWebAuthn()"> Test WebAuthn </button>
    <!-- <form id="oform" name="oform" :action="test | testFilter(abc)" method="post" target="_blank">
      <input type="text" placeholder="aloha">
      <button type="submit">Aloha</button>
    </form>
    <form id="oform1" name="oform" action="instagram://media?id=1346423547953773636_401375631" method="post" target="_blank">
      <input type="text" placeholder="aloha">
      <button type="submit">Aloha</button>
    </form> -->
  </div>
</template>

<script>
import api from "../../api/web-auth.js";
// import * as WebAuthnApp from "webauthn-simple-app";

export default {
  name: 'login',
  methods: {
    handleLoginByWebAuthn() {
      api.register({ username: "Trang", name: "Trang" })
        .then(res => console.log(res))
        .catch(err => {
          console.log(err);
        });
    }
  },
  props: {
    abc: String
  },
  data() {
    return {
      formData: {
        userName: '',
        displayName: ''
      }
    }
  },
  filters: {
    testFilter: (param1, param2 = '') => {
      console.log(param1);
      console.log(param2);
      if (param2) {
        return param1 + param2;
      }
      return param1;
    }
  }
}
</script>
