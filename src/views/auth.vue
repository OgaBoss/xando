<template>
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="uk-card-media-left uk-cover-container uk-visible@m">
            <img src="images/light.jpg" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
    .uk-card {
        height: 100%;

        .uk-card-media-left {
            background-image: url('../assets/images/tic-tac-toe.png');
        }
    }

    .uk-card-default {
        background-color: #e6e6e636;
    }
    .uk-label {
        background-color: #faa05a;
    }

    .uk-card-body a:hover {
        color: white;
        text-decoration: none;
    }
</style>
