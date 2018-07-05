<template>
    <el-row :gutter="2">
        <el-col :span="16">
            <div class="grid-content cp-img">

            </div>
        </el-col>
        <el-col :span="8" class="cp-login-form">
            <div class="grid-content ">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="username">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="password">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">login</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
                    middle: 'middle'
                }
            };
        },
    };
</script>

<style lang="scss" scoped>
    .el-row, .el-col{
        height: 100%;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .grid-content {
        border-radius: 4px;
        height: 100%;
    }

    .cp-img {
        background: url('../../assets/tac.gif') no-repeat center center;
    }

    .cp-login-form {
        .grid-content {
            border-radius: 0 !important;
            align-items: center;
            display: flex;
            justify-content: center;
            background: #E5E5E5;
        }
    }
</style>