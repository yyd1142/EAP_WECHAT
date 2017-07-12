<template>
    <div class="share" v-if="isShare" @click="close()">
        <div class="main">
            <i class="jiantou-icon"></i>
            <span class="text" v-html="text"></span>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
.share {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 22;
    background-color: rgba(53, 51, 56, 0.93);
    .main {
        width: 100vw;
        .jiantou-icon {
            background: url('/static/assets/jiantou.png') 0 0 no-repeat;
            background-size: cover;
            width: 72px;
            height: 72px;
            position: absolute;
            right: 10px;
        }
        .text {
            color: #ffffff;
            width: 100vw;
            text-align: center;
            display: block;
            padding-top: 47px;
            font-size: 16px;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            isShare: false
        }
    },
    props: ['text'],
    methods: {
        close() {
            this.isShare = false
        }
    }
}
</script>


