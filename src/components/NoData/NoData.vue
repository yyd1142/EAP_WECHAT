<template>
    <div class="nodata" v-if="isNodata">
        <div class="text" v-text="text"></div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
.nodata {
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    height: 30px;
    top: 0;
    bottom: 0;
    display: table;
    width: 100%;
    .text {
        text-align: center;
        line-height: 30px;
        display: table-cell;
        vertical-align: middle;
        color: #9e9e9e;
    }
}
</style>

<script>
export default {
    props: ['text'],
    data() {
        return {
            isNodata: true
        }
    }
}
</script>


