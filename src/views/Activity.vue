<template>
  <div class="activity">
    <div class="activity-tabs mko-box-shadow">
      <div class="tab-text" @click="handleTabChange('tab1')">
        <span :class="activedTab === 'tab1' ? 'activied' : ''">近期活动</span>
      </div>
      <div class="tab-text" @click="handleTabChange('tab2')">
        <span :class="activedTab === 'tab2' ? 'activied' : ''">往期活动</span>
      </div>
    </div>
    <ul class="activity-table-view mko-box-shadow">
      <li class="activity-table-cell" v-for="item in 14" @click="linkPath(item)">
        <img src="/static/assets/default_hd.png" />
        <div class="activity-item">
          <div class="title">如何管理您的情绪</div>
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
        <div class="activity-right">
          <div class="type">
            <span>个辅</span>
          </div>
          <div class="item">
            <i class="icon iconfont icon-yuedu"></i>
            <span>21</span>
          </div>
          <div class="item">
            <i class="icon iconfont icon-renshu"></i>
            <span>20</span>
          </div>
          <div class="item">
            <!--<i class="icon iconfont icon-yidianzan red"></i>-->
            <i class="icon iconfont icon-dianzan red"></i>
            <span class="red">20</span>
          </div>
        </div>
      </li>
    </ul>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
import api from 'api'

export default {
  data() {
    return {
      activedTab: 'tab1',
      loading: false,
      scroller: null
    }
  },
  mounted() {
    this.scroller = this.$el
    this.getActivityList();
  },
  activated() {
    this.$nextTick(() => {
      document.title = '活动列表'
    })
  },
  methods: {
    handleTabChange(val) {
      this.activedTab = val
    },
    getActivityList() {

    },
    loadMore() {
      
    },
    linkPath(item) {
      this.$router.push({
        path: `/activity_detail/${1}`,
        query: {
          type: this.activedTab
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.activity-tabs {
  background: #353338;
  height: 30px;
  position: fixed;
  z-index: 20;
  width: 100%;
  top: 0;
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

.activity-table-view {
  width: 100%;
  margin-top: 30px;
  .activity-table-cell {
    height: 95px;
    background-color: #ffffff;
    position: relative;
    img {
      width: 30vw;
      height: 94px;
      float: left;
      border-bottom: 1px solid #fff;
    }
    .activity-item {
      width: 55vw;
      float: left;
      padding: 0 6px 0 14px;
      .title {
        font-size: 16px;
        color: #313131;
        letter-spacing: 0px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 5px;
      }
      .item {
        font-family: PingFangSC-Light;
        font-size: 10px;
        color: #7D7D7D;
        letter-spacing: 0px;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 3px;
        span {
          color: #313131;
          font-weight: bold;
          margin-right: 3px;
        }
      }
    }
    .activity-right {
      height: 95px;
      width: 15vw;
      float: right;
      .type {
        width: 100%;
        height: 18px;
        background-color: #FFBB0D;
        font-size: 10px;
        position: relative;
        color: #ffffff;
        text-align: CENTER;
        border-radius: 18px 0 0 18px;
        margin-top: 5px;
        display: table;
        span {
          vertical-align: middle;
          display: table-cell;
          line-height: 18px
        }
        &.tuanfu-type {
          background: #FF6923 !important;
        }
      }
      .item {
        width: 100%;
        float: right;
        height: 18px;
        line-height: 18px;
        margin-top: 4px;
        i {
          float: left;
          color: #484848;
          &.red {
            color: #FF5757;
          }
        }
        span {
          font-family: PingFangSC-Regular;
          font-size: 8px;
          color: #848484;
          letter-spacing: 0px;
          float: right;
          padding-right: 8px;
          &.red {
            color: #FF5757;
          }
        }
      }
    }
  }
}
</style>