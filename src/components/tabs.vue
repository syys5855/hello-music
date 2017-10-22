<template>
  <div>
      <el-row class="tabs-wrap" type="flex" justify="space-around" align="middle">
        <tab-panel v-for="(item,index) in items" :key="index" :label="item"></tab-panel>
      </el-row>
  </div>
</template>

<script>
import TabPanel  from "@components/tab-panel.vue";
export default {
  components: { TabPanel },
  data() {
    return {
      items: ['推荐音乐','热歌榜','搜索']
    };
  }
};
</script>

<style lang="scss" scoped>
$height: 40px;
.tabs-wrap {
  height: $height;
  border-bottom: 1px solid #e7e7e7;
}
</style>
