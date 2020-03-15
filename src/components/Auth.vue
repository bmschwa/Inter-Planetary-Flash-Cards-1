// src/components/Auth.vue
// Shamelessly copied from https://dev.to/dabit3/how-to-build-production-ready-vue-authentication-23mk
<template>
  <div class="auth">
    <amplify-authenticator />
  </div>
</template>

<script>

export default {
  name: 'Auth'
}
</script>

<style>
.auth {
  margin: 0 auto;
    width: 460px;
    }
    </style>
