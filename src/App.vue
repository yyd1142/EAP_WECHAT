<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
body {
  margin: 0;
  background-color: #EFEEF4;
  -webkit-user-select: none;
}

a,
a:hover,
a:active,
a:visited {
  display: block;
  color: inherit;
  text-decoration: none;
}

div {
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

input {
  outline: 0;
  box-shadow: none;
  -webkit-appearance: none;
}

.mko-box-shadow {
  box-shadow: 0 1px 5px rgba(136, 136, 136, 0.19);
}

.mko-box-shadow-top {
  box-shadow: 2px 0px 11px 0px rgba(136, 136, 136, 0.65)
}
</style>
