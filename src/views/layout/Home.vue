<template>
  <div class="layout" :class="{ 'layout-hide-text': spanLeft < 4 }">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1" theme="dark" width="auto">
          <div class="layout-logo-left">置换单审核系统</div>
          <Menu-item name="1">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">选项 1</span>
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad" :size="iconSize"></Icon>
            <span class="layout-text">选项 2</span>
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics" :size="iconSize"></Icon>
            <span class="layout-text">选项 3</span>
          </Menu-item>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
          <Button type="text">
            <Icon type="checkmark" />
          </Button>
          <Button type="primary" icon="navicon-round" @click="toggleClick">
          </Button>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">内容区域</div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
// import SideBar from "./components/sideBar.vue";

export default {
  // components: {
  //   SideBar,
  // },
  data() {
    return {
      spanLeft: 4,
      spanRight: 20,
    };
  },
  computed: {
    iconSize() {
      return this.spanLeft === 4 ? 20 : 32;
    },
  },
  methods: {
    toggleClick() {
      if (this.spanLeft === 4) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 4;
        this.spanRight = 20;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/variables.less");
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  background: @gray;
  overflow: hidden;
  .layout-menu-left {
    background: @sideColor;
    .layout-logo-left {
      width: 90%;
      height: 55px;
      line-height: 55px;
      text-align: center;
      color: #ffffff;
      font-size: 18px;
    }
  }
  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .layout-breadcrumb {
    padding: 10px 15px 0;
  }
  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    .layout-content-main {
      padding: 10px;
    }
  }
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
}
</style>
