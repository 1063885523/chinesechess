<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
  .clearfix::after {
    clear: both;
    content: '';
    display: block;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;
    }
    a.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
