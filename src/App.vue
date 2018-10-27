<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    body, div, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 125%;
    color: #393939;
  }
  @media screen and (min-width:490px) and (max-width:640px) {
    html {
      font-size: 110%;
    }
  }
  @media screen and (min-width:420px) and (max-width:490px) {
    html {
      font-size: 95%;
    }
  }
  @media screen and (min-width:375px) and (max-width:420px) {
    html {
      font-size: 85%;
    }
  }
  @media screen and (max-width:375px) {
    html {
      font-size: 80%;
    }
  }
  ul {
    list-style: none;
  }
  img {
    border: 0;
  }
  a {
    color: #393939;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
  }
  #app {
    margin: 0 auto;
    max-width: 750px;
  }
</style>
