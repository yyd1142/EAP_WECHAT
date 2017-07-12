<template>
    <div class="messagebox" v-if="isMessageBox">
        <div class="hidden-wrap" @click="cancel()"></div>
        <div class="main">
            <div class="content" v-text="text"></div>
            <div class="actions">
                <div class="cancel" @click="cancel()">
                    <span>取消</span>
                </div>
                <div class="submit" @click="submit()">
                    <span>确定</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
.messagebox {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, .87);
    top: 0;
    z-index: 22;
    margin: auto;
    .hidden-wrap {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 23;
        margin: auto;
        top: 0;
    }
    .main {
        width: 270px;
        position: absolute;
        top: 38vh;
        left: 0;
        right: 0;
        margin: auto;
        background: #fff;
        border-radius: 13px;
        z-index: 24;
        .content {
            width: 100%;
            font-size: 17px;
            color: #000000;
            letter-spacing: -0.41px;
            text-align: center;
            padding: 14px 0;
        }
        .actions {
            width: 100%;
            border-top: 1px solid rgba(136, 136, 136, 0.25);
            height: 44px;
            .cancel,
            .submit {
                font-size: 17px;
                letter-spacing: -0.41px;
                line-height: 22px;
                text-align: center;
                height: 44px;
                display: table;
                span {
                    display: table-cell;
                    vertical-align: middle;
                    line-height: 44px;
                }
            }
            .cancel {
                color: #929AA4;
                width: 50%;
                margin-right: auto;
                border-right: 1px solid rgba(136, 136, 136, 0.25);
            }
            .submit {
                color: #0076FF;
                width: 49.999%;
                margin: -44px 0 0 auto;
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            isMessageBox: false
        }
    },
    props: ['text'],
    methods: {
        cancel() {
            this.isMessageBox = false;
        },
        submit() {
            this.$emit('onSubmitEvent')
        }
    }
}
</script>


