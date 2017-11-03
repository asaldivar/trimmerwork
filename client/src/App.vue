<template>
  <div id="app" class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-12">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav-tabs>li {
  font-size: 16px;
}
.nav>li>a {
  color: #2c3e50;
}
@media only screen and (max-width: 320px) {
  a.navigation {
    padding: 10px 5px !important;
  }
}
div[class^="col-md-"] {
  padding: 0;
}
</style>
