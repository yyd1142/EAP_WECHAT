<template>
    <div class="person">
        <ul class="person-table-view mko-box-shadow">
            <li class="person-table-cell">
                <div class="person-title" style="height: 80px;">
                    <span style="line-height: 80px;">头像</span>
                </div>
                <img class="header-image" src="/static/assets/default_hd.png" />
            </li>
            <li class="person-table-cell">
                <div class="person-title">
                    <span>姓名</span>
                </div>
                <div class="person-item">
                    <span>薛之谦</span>
                </div>
            </li>
            <li class="person-table-cell">
                <div class="person-title">
                    <span>性别</span>
                </div>
                <div class="person-item">
                    <span>男</span>
                </div>
            </li>
            <li class="person-table-cell">
                <div class="person-title">
                    <span>单位</span>
                </div>
                <div class="person-item">
                    <span>深圳猫空</span>
                </div>
            </li>
            <li class="person-table-cell">
                <div class="person-title">
                    <span>电话</span>
                </div>
                <!--<div class="person-item">
                                <span>18444444747</span>
                            </div>-->
                <input type="text" placeholder="请输入手机号" />
            </li>
            <li class="person-table-cell">
                <div class="person-title">
                    <span>积分</span>
                </div>
                <div class="value">
                    <span>233</span>
                    <i class="iconfont icon-jiantou-xiayiye-"></i>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import api from 'api'

export default {
    data() {
        return {}
    },
    activated() {
        this.$nextTick(() => {
            document.title = '个人信息'
        })
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
@import "../config.less";
.person {
    .person-table-view {
        width: 100%;
        background-color: #ffffff;
        margin: 0 auto;
        padding: 0 0 0 14px;
        box-sizing: border-box;
        li:last-child {
            border-style: none;
        }
        .person-table-cell {
            width: 100%;
            min-height: 44px;
            position: relative;
            border-bottom: 1px solid @borderColor;
            .person-title {
                height: 44px;
                width: 100px;
                display: table;
                font-size: 16px;
                color: #232323;
                letter-spacing: 0px;
                span {
                    display: table-cell;
                    vertical-align: middle;
                    line-height: 44px;
                }
            }
            .value {
                position: absolute;
                right: 14px;
                top: 0;
                height: 44px;
                margin: auto;
                bottom: 0;
                color: #FF6923;
                display: table;
                span {
                    display: table-cell;
                    vertical-align: middle;
                    line-height: 44px;
                }
                i {
                    margin: 10px 0 0 0;
                    display: block;
                }
            }
            .person-item {
                position: absolute;
                top: 0;
                right: 14px;
                height: 44px;
                bottom: 0;
                display: table;
                span {
                    display: table-cell;
                    vertical-align: middle;
                    line-height: 44px;
                }
            }
            .header-image {
                height: 60px;
                width: 60px;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 14px;
                margin: auto;
            }
            input {
                height: 44px;
                font-size: 14px;
                color: #333333;
                letter-spacing: 0px;
                border-style: none;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 14px;
                text-align: right;
            }
        }
    }
}
</style>
