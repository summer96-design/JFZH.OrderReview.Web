<template>
  <Menu active-name="1" theme="dark" width="auto">
    <div class="layout-logo-left">置换单审核系统</div>
    <Menu-item name="1">
      <Icon type="ios-navigate" :size="iconSize"></Icon>
      <span class="layout-text">房管站核实</span>
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
</template>

<script>
export default {
  computed: {
    iconSize() {
      return this.$store.state.spanLeft === 4 ? 20 : 32;
    },
  },
};
</script>

<style scoped lang="less">
.layout-logo-left {
  width: 90%;
  height: 55px;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
}
.layout-hide-text .layout-text {
  display: none;
}
</style>
