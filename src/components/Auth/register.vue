<template>
    <div class="grid-content">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>XANDO</span>
            </div>
            <div class="text item">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="username">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="email">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="password">
                        <el-input type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="mini">signup</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>

    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        email: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
