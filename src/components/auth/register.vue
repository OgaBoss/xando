<template>
    <div class="uk-card-body uk-flex uk-flex-center">
        <div class="uk-card uk-card-default uk-card-body uk-width-3-5@m ">
            <router-link class="uk-card-badge uk-label" to="/auth/login">Login</router-link>
            <form v-on:submit.prevent="register()">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Register</legend>
                    <div class="uk-margin">
                        <input v-model="form.email" class="uk-input" type="email" placeholder="email">
                    </div>
                    <div class="uk-margin">
                        <input v-model="form.password" class="uk-input" type="password" placeholder="password">
                    </div>
                </fieldset>
                <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                    register
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import UIkit from 'uikit'
export default {
    data () {
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },

    methods: {
    	register() {
            UIkit.notification({message: 'Notification message'})
    		this.$store.dispatch('actionRegisterUser', this.form)
        }
    }
}
</script>

<style lang="less" scoped>
    .uk-card-body {
        margin-top: 15%;
    }
</style>
