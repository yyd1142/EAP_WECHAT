<template>
    <div class="indicator" v-if="isLoading">
        <div class="main">
            <img src="/static/assets/loading.gif" />
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
.indicator {
    width: 100vw;
    position: fixed;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 100;
    .main {
        width: 66px;
        position: fixed;
        height: 66px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .54);
        margin: auto;
        border-radius: 6px;
        padding: 11px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        close() {
            this.isLoading = false;
        }
    }
}
</script>


