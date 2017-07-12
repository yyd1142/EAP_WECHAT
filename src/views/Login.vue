<template>
    <div class="login">
        <div class="login-header mko-box-shadow">
            <i class="login-logo"></i>
            <span>EAP专员积分管理系统</span>
        </div>
        <div class="login-form-wrap">
            <input type="text" placeholder="请输入您的账号" v-model="user.name" />
            <input type="password" placeholder="请输入您的工号" v-model="user.passwrod" />
            <mu-flat-button @click="login()" label="确定" class="login-btn demo-flat-button" />
        </div>
    </div>
</template>

<script>
import api from 'api'
import md5 from 'blueimp-md5'
var isClick = false;
export default {
    data() {
        return {
            user: {
                name: '',
                passwrod: ''
            }
        }
    },
    activated() {
        this.$nextTick(() => {
            document.title = '登录'
        })
    },
    methods: {
        login() {
            for (let key in this.user) {
                if (this.user[key] == '') {
                    alert(`${key}不能为空`)
                    return false;
                }
            }
            if (isClick) {
                return false;
            }
            isClick = true;
            api.login({
                userName: this.user.username,
                password: md5(this.user.password)
            }).then(result => {
                if (!result) {
                    return false;
                }
                if (result.code != 0) {
                    isClick = false;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    .login-header {
        width: 100%;
        background-color: #ffffff;
        height: 230px;
        text-align: center;
        position: relative;
        .login-logo {
            background: url('/static/assets/logo.png') 0 0 no-repeat;
            background-size: cover;
            width: 85px;
            height: 98px;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            top: 40px;
        }
        span {
            font-size: 18px;
            color: #FF821E;
            letter-spacing: 2px;
            font-size: 18px;
            color: #FF821E;
            letter-spacing: 2px;
            margin: 166px 0 0 0;
            width: 100%;
            float: left;
        }
    }
    .login-form-wrap {
        width: 100%;
        padding: 0 10px;
        margin: 20px 0;
        input {
            width: 100%;
            border-style: none;
            height: 40px;
            border-radius: 4px;
            font-size: 14px;
            margin-bottom: 8px;
            padding: 0 14px;
            box-sizing: border-box;
            color: #333333;
        }
        .login-btn {
            font-size: 18px;
            color: #FFFFFF;
            letter-spacing: 0px;
            background: #FFA123;
            border-radius: 6px;
            width: 100%;
            text-align: center;
            display: table;
            height: 40px;
        }
    }
}
</style>
