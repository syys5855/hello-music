<template>
  <div>
    <div style="height:64px;">
      <head-bar></head-bar>
    </div>
    <div style="height:40px;">
      <el-row type="flex" align="middle" justify="space-around" class="tab-panel-wrap">
          <tab-panel :label="item.label"  v-for="(item,index) in items" :key="index" :path="item.path"></tab-panel>
      </el-row>
    </div>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import HeadBar from "@components/head-bar.vue";
import TabPanel from "@components/tab-panel.vue";
export default {
  components: { HeadBar, TabPanel },
  data() {
    return {
      activeName: "first",
      items: [
        { label: "recommend", path: "/home-page/recommend" },
        { label: "rank", path: "/home-page/rank" },
        { label: "search", path: "/home-page/search" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$height: 40px;
.tab-panel-wrap {
  position: fixed;
  left: 0;
  top: 64px;
  width: 100%;
  height: $height;
  border-bottom: 1px solid #e7e7e7;
  z-index: 10;
  background-color: #fff;
}
</style>
