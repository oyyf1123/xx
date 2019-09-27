<template>
  <div id="app">
    <AllRouter></AllRouter>
  </div>
</template>

<script>
import AllRouter from './components/AllRouter'

export default {
  name: 'app',
  components: {
    AllRouter
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
