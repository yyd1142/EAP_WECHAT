<template>
  <div class="home">
    <div class="total-item mko-box-shadow">
      <span class="key">总积分</span>
      <span class="value">234</span>
    </div>
    <div class="title">活动记录</div>
    <div class="list">
      <ul class="list-view mko-box-shadow">
        <li class="list-cell" v-for="item in 1">
          <div class="left">
            <span class="type">志愿者</span>
            <span class="status">已报名</span>
            <span class="value">积分+20</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <div class="act-title">如何管理您的情绪</div>
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
          <div class="act-type">
            <span>个辅</span>
          </div>
        </li>
      </ul>
      <div class="rule">积分兑换暂未开放，敬请谅解</div>
    </div>
    <mu-flat-button label="积分兑换" class="duihuan-btn" label-class="baoming" />
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {

    }
  },
  activated() {
    this.$nextTick(() => {
      document.title = '积分系统'
    })
  }
}
</script>

<style lang="less" scoped>
.home {
  .total-item {
    width: 100vw;
    height: 37px;
    display: table;
    background-color: #ffffff;
    .key,
    .value {
      line-height: 37px;
      vertical-align: middle;
      display: table-cell;
      font-size: 16px;
      letter-spacing: 0px;
    }
    .key {
      color: #232323;
      padding-left: 14px;
    }
    .value {
      color: #FF6923;
      padding-right: 13px;
      text-align: right;
    }
  }
  .title {
    width: 100vw;
    font-size: 14px;
    color: #232323;
    letter-spacing: 0px;
    padding: 13px 14px;
  }
  .list {
    width: 100vw;
    margin-bottom: 54px;
    .rule {
      font-size: 14px;
      color: #313131;
      letter-spacing: 0px;
      text-align: center;
      width: 100%;
      margin-top: 14px;
    }
    .list-view {
      width: 100vw;
      background: #ffffff;
      li:last-child {
        border-style: none;
      }
      .list-cell {
        width: 100vw;
        height: 85px;
        position: RELATIVE;
        border-bottom: 1px solid rgba(136, 136, 136, 0.14);
        .left {
          width: 30vw;
          height: 85px;
          margin-right: AUTO;
          .type {
            width: 100%;
            padding: 6px 0 0 14px;
            font-size: 14px;
            color: #606060;
            letter-spacing: 0px;
            display: block;
          }
          .status {
            width: 100%;
            padding-left: 14px;
            font-size: 14px;
            color: #606060;
            letter-spacing: 0px;
            display: block;
          }
          .value {
            font-size: 12px;
            color: #FF6923;
            letter-spacing: 0px;
            display: block;
            padding: 10px 0 0 14px;
          }
        }
        .line {
          position: absolute;
          background: #D8D8D8;
          width: 1px;
          z-index: 10;
          left: 25vw;
          height: 76px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .right {
          width: 69.99vw;
          margin: -85px 0 0 auto;
          height: 85px;
          .act-title {
            font-size: 16px;
            color: #313131;
            letter-spacing: 0px;
            margin-top: 3px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .item {
            font-size: 10px;
            color: #7D7D7D;
            letter-spacing: 0px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            span {
              color: #313131;
            }
          }
        }
        .act-type {
          background: #FFBB0D;
          font-size: 10px;
          color: #FFFFFF;
          letter-spacing: 0px;
          width: 50px;
          height: 18px;
          top: 7px;
          right: 0;
          z-index: 10;
          position: absolute;
          text-align: center;
          border-radius: 18px 0 0 18px;
          display: table;
          span {
            line-height: 18px;
            display: table-cell;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .duihuan-btn {
    z-index: 12;
    color: #FFFFFF;
    width: 100vw;
    background: #FFA123;
    bottom: 0;
    position: fixed;
    border-radius: 0;
  }
}
</style>
