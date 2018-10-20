<template>
    <div class="uk-card-body uk-flex uk-flex-center">
        <div class="uk-card uk-card-default uk-card-body uk-width-3-5@m ">
            <!--<a class="uk-card-badge uk-label">Register</a>-->
            <router-link class="uk-card-badge uk-label" to="/auth/register">Register</router-link>
            <form>
                <fieldset class="uk-fieldset">

                    <legend class="uk-legend">Login</legend>

                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="username">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="password" placeholder="password">
                    </div>
                </fieldset>
                <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                    login
                </button>
            </form>
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

<style lang="less" scoped>
    .uk-card-body {
        margin-top: 15%;
    }
</style>
