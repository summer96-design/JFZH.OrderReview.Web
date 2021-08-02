<template>
  <Row type="flex" justify="space-between">
    <i-button type="text" @click="toggleClick">
      <Icon type="ios-photos" :size="30"></Icon>
    </i-button>
    <Menu mode="horizontal" theme="light">
      <Submenu name="1">
        <template slot="title">
          <Icon type="stats-bars"></Icon>
          个人中心
        </template>
        <Menu-item name="1-1">修改密码</Menu-item>
        <Menu-item name="1-2">退出</Menu-item>
      </Submenu>
    </Menu>
  </Row>
</template>

<script>
export default {
  methods: {
    toggleClick() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>

<style>
</style>
