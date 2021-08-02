<template>
  <div
    class="layout"
    :class="{ 'layout-hide-text': $store.state.spanLeft < 4 }"
  >
    <Row type="flex" style="height: 100%">
      <i-col :span="$store.state.spanLeft" class="layout-menu-left">
        <side-bar />
      </i-col>
      <i-col :span="$store.state.spanRight">
        <div class="layout-header">
          <top-bar />
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb />
        </div>
        <div class="layout-content">
          <div class="layout-content-main">主内容区域</div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue';
import SideBar from './components/sideBar.vue';
import TopBar from './components/TopBar.vue';

export default {
  components: {
    SideBar,
    TopBar,
    Breadcrumb,
  },
  computed: {
    iconSize() {
      return this.$store.state.spanLeft === 4 ? 20 : 32;
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
.ivu-col {
  transition: width 0.2s ease-in-out;
}
</style>
