<template>
    <el-row :gutter="0">
        <el-col :span="16">
            <div class="grid-content cp-img">
            </div>
        </el-col>
        <el-col :span="8" class="cp-login-form">
            <el-menu class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1">
                    <a id="auth-link" :href="createLink(showLink())">
                        {{showLink()}}
                    </a>
                </el-menu-item>
            </el-menu>
            <div class="line"></div>

            <router-view></router-view>

        </el-col>
    </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },

      rowAttributes: {
        center: 'center',
        middle: 'middle',
      },
    };
  },

  methods: {
    showLink() {
      if (this.$route.name === 'login') {
        return 'register';
      }

      return 'login';
    },

    createLink(path) {
      return `#/auth/${path}`;
    },
  },
};
</script>

<style lang="scss" scoped>
    .el-row, .el-col{
        height: 100%;
    }

    .bg-purple {
        background: #faf7f6;
    }

    .grid-content {
        border-radius: 4px;
        height: 100%;
    }

    .cp-img {
        background: #faf7f6 url('../../assets/tac.gif') no-repeat center center;
    }

    .el-form-item__label {
        color: #fff !important;
    }

    .el-menu--horizontal, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
        background-color: #f6f0ee;
        border-bottom: solid 1px #f6f0ee;
    }

    /* http://www.color-hex.com/color/f6f0ee */
    .cp-login-form {
        .grid-content {
            border-radius: 0 !important;
            align-items: center;
            display: flex;
            justify-content: center;
            background: #f6f0ee;
        }
    }
</style>
