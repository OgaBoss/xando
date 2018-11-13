<template>
  <div id="app">
    <div class="uk-alert-primary uk-align-center" uk-alert>
      <a class="uk-alert-close" uk-close></a>
      <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

export default {
  name: 'App'
}
</script>>

<style lang="less">
  @import "./assets/normalize";
  @import "./assets/less/theme.less";
</style>
