<template>
  <router-link :to="path" tag="div" class="tab-panel">
    <span class="font-sm">{{label}}</span>
  </router-link>
</template>
<script>
export default {
  props: ["label", "path"]
};
</script>

<style lang="scss" scoped>
.tab-panel {
  position: relative;
  height: 100%;
  line-height: 40px;
  padding: 0 5px;
  &.active{
    color: #d33a31;
  }
  &.active:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    z-index: 3;
    width: 100%;
    height: 4px;
    transform: scaleY(0.5);
    background: #d33a31;
  }
}
</style>
