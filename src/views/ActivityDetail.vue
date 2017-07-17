<template>
    <div class="detail">
        <div class="banner mko-box-shadow">
            <img src="/static/assets/default_hd.png">
        </div>
        <div class="activity-tabs mko-box-shadow" v-if="$route.query.type === 'tab1' ? false : true">
            <div class="tab-text" @click="handleTabChange('tab1')">
                <span :class="activedTab === 'tab1' ? 'activied' : ''">活动介绍</span>
            </div>
            <div class="tab-text" @click="handleTabChange('tab2')">
                <span :class="activedTab === 'tab2' ? 'activied' : ''">活动花絮</span>
            </div>
        </div>
        <div class="detail-top mko-box-shadow">
            <div class="left">
                <div class="title">如何管理自己的表情</div>
                <div class="item">
                    <span>主办</span>深汕特别合作区深汕巴士有限公司
                </div>
                <div class="item">
                    <span>时间</span>5月23日 18:00
                </div>
                <div class="item">
                    <span>地点</span>深圳公交大厦24楼大会议室
                </div>
            </div>
            <div class="right">
                <div class="type">
                    <div class="cell">
                        <span>个辅</span>
                    </div>
                </div>
                <div class="item">
                    <i class="icon iconfont icon-yuedu"></i>
                    <span>211</span>
                </div>
                <div class="item">
                    <i class="icon iconfont icon-renshu"></i>
                    <span>210</span>
                </div>
                <div class="item" @click="like()">
                    <transition name="fade">
                        <i class="icon iconfont icon-yidianzan red" v-if="isLike"></i>
                    </transition>
                        <i class="icon iconfont icon-dianzan red" v-if="!isLike"></i>
                    <span class="red" v-text="likeValue"></span>
                </div>
            </div>
        </div>
        <div class="detail-content mko-box-shadow" :class="$route.query.type === 'tab2' ? 'is-wangqi' : ''">
            <p>以下几种方法进行一些简单的自我改变： 增加自信 自信是改善神经性焦虑的必要前提。一些对自己没有自信心的人，对自己完成和应付事物的能力是怀疑的，夸大自己失败的可能性，从而忧虑、紧张和恐惧。 因此，作为一个神经性焦虑症的患者，你必须首先自信，减少自卑感。应该相信自己每增加一次自信，焦虑程度就会降低一点，恢复自信，也就是最终驱逐焦虑。 自我放松 从紧张情绪中解脱出来。比如：你在精神稍好的情况下，去想象种种可能的危险情景，让最弱的情景首先出现。并重复出现，你慢慢便会想到任何危险情景或整个过程都不再体验到焦虑。此时便算终止。 自我反省 有些神经性焦虑是由于患者对某些情绪体验或欲望进行压抑，压抑到无意中去了，但它并没有消失，仍潜伏于无意识中，因此便产生了病症。发病时你只知道痛苦焦虑，而不知其因。因此在此种情况下，你必须进行自我反省，把潜意识中引起痛苦的事情诉说出来。必要时可以发泄，发泄后症状一般可消失。 自我刺激 焦虑性神经症患者发病后，脑中总是胡思乱想，坐立不安，百思不得其解，痛苦异常。此时，患者可采用自我刺激法，转移自己的注意力。如在胡思乱想时，找一本有趣的能吸引人的书读，或从事紧张的体力劳动，忘却痛苦的事情。这样就可以防止胡思乱想再产生其他病症，同时也可增强你的适应能力。 自我催眠 焦虑症患者大多数有睡眠障碍，很难入睡或突然从梦中惊醒，此时你可以进行自我暗示催眠。如：可以数数，或用手举书本读等促使自己入睡。
            </p>
            <mu-flat-button label="分享给我的朋友" class="detail-share-btn" label-class="baoming" v-if="$route.query.type === 'tab1' ? false : true" @click="$refs.shareWraper.isShare = true;" />
        </div>
        <mu-flat-button label="报名" class="detail-btn mko-box-shadow-top" label-class="baoming" v-if="$route.query.type === 'tab1' ? true : false" @click="$refs.messageBoxWraper.isMessageBox = true;" />
        <div class="detail-yibaoming" v-if="false">
            <span>
                <i class="icon iconfont icon-yibaoming"></i>已报名</span>
        </div>
        <share-tips :text="shareText" ref="shareWraper"></share-tips>
        <message-box :text="messageText" @onSubmitEvent="baoming()" ref="messageBoxWraper"></message-box>
    </div>
</template>

<script>
import { ShareTips, MessageBox } from 'components'

export default {
    name: 'detail',
    data() {
        return {
            activedTab: 'tab1',
            shareText: '转发和同事们一起看看吧',
            messageText: '确定报名？',
            isShare: false,
            isLike: false,
            likeValue: 120
        }
    },
    activated() {
        this.$nextTick(() => {
            document.title = this.$route.query.type == 'tab1' ? '近期活动' : '往期活动'
        })
    },
    methods: {
        handleTabChange(val) {
            this.activedTab = val
        },
        baoming() {
            this.$refs.messageBoxWraper.isMessageBox = false;
            this.$nextTick(() => {
                this.shareText = '报名成功<br>转发叫上同事们一起参加吧';
                this.$refs.shareWraper.isShare = true;
            })
        },
        like() {
            if (!this.isLike) {
                this.isLike = true;
                this.likeValue += 1
            }
        }
    },
    components: {
        ShareTips,
        MessageBox
    }
}
</script>

<style lang="less" scoped>
.detail {
    .banner {
        width: 100vw;
        margin: 0 auto;
        img {
            height: 200px;
            width: 100vw;
            display: block;
        }
    }
    .activity-tabs {
        background: #353338;
        height: 30px;
        margin: 0 auto;
        .tab-text {
            font-size: 12px;
            padding: 0 55px;
            margin: 0;
            width: 50%;
            float: left;
            text-align: center;
            margin: 6px 0 0 0;
            span {
                color: #ffffff;
                &.activied {
                    border-bottom: 2px solid #ffffff;
                }
            }
        }
    }
    .detail-top {
        width: 100vw;
        background-color: #ffffff;
        position: relative;
        padding: 5px 0 5px 0;
        .left {
            width: 70vw;
            margin: 0 auto 0 0;
            padding: 0 0 0 14px;
            .title {
                font-size: 16px;
                color: #313131;
                letter-spacing: 0px;
            }
            .item {
                width: 100%;
                font-family: PingFangSC-Light;
                font-size: 10px;
                color: #7D7D7D;
                letter-spacing: 0px;
                span {
                    font-weight: bold;
                    color: #313131;
                    margin: 0 3px 0 0;
                }
            }
        }
        .right {
            width: 30vw;
            position: absolute;
            right: 0;
            top: 0;
            .type {
                width: 100%;
                float: left;
                text-align: right;
                margin: 8px 0 0 0;
                .cell {
                    width: 58px;
                    height: 18px;
                    display: table;
                    background-color: #FFBB0D;
                    float: right;
                    border-radius: 18px 0 0 18px;
                    text-align: center;
                    span {
                        display: table-cell;
                        vertical-align: middle;
                        line-height: 18px;
                        color: #ffffff;
                        font-size: 10px;
                    }
                }
            }
            .item {
                width: 100% / 3;
                float: left;
                height: 50px;
                text-align: center;
                margin: 10px 0 0 0;
                i {
                    color: #484848;
                    display: block;
                    font-size: 18px;
                    &.red {
                        color: #FF5757;
                    }
                }
                span {
                    width: 100%;
                    display: block;
                    &.red {
                        color: #FF5757;
                    }
                }
            }
        }
    }
    .detail-content {
        background-color: #ffffff;
        padding: 5px 14px;
        margin: 8px 0 48px 0;
        &.is-wangqi {
            margin: 8px 0 8px 0;
        }
        p {
            width: 100%;
            margin: 0;
            padding: 0;
            line-height: 22px;
            font-size: 13px;
        }
    }
    .detail-btn {
        background-color: #FFA123;
        font-size: 18px;
        height: 40px;
        color: #ffffff;
        width: 100vw;
        position: fixed;
        bottom: 0;
        z-index: 20;
        border-radius: 0;
    }
    .detail-share-btn {
        background-color: #FFA123;
        font-size: 18px;
        height: 40px;
        color: #ffffff;
        width: 100%;
        border-radius: 4px;
    }
    .detail-yibaoming {
        background-color: #FFA123;
        height: 40px;
        width: 100vw;
        position: fixed;
        bottom: 0;
        z-index: 20;
        border-radius: 0;
        display: table;
        text-align: center;
        span {
            color: #ffffff;
            font-size: 18px;
            line-height: 40px;
            display: table-cell;
            vertical-align: middle;
            i {
                display: inline-block;
                margin-right: 6px;
                font-size: 18px;
            }
        }
    }
}
</style>
