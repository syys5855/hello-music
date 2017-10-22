<template>
<div>
  <el-row  class="cover-group">
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:595818725}}" tag="div">
        <cover></cover>
      </router-link>
    </el-col>
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:960322723}}" tag="div">
        <cover></cover>
      </router-link>
    </el-col>
    <el-col :span="8" class="cover-item">
      <cover></cover>
    </el-col>
  </el-row>

   <el-row  class="cover-group">
    <el-col :span="8" class="cover-item">
      <cover></cover>
    </el-col>
    <el-col :span="8" class="cover-item">
      <cover></cover>
    </el-col>
    <el-col :span="8" class="cover-item">
      <cover></cover>
    </el-col>
  </el-row>

  <el-row>
  </el-row>

</div>
</template>

<script>
import Cover from "@components/cover.vue";
import SongList from "@components/song-list.vue";
export default {
  components: { Cover, SongList },
  methods: {}
};
</script>

<style lang="scss" scoped>
.cover-group {
  & .cover-item:last-child {
    padding-right: 0px;
  }
}
.cover-item {
  padding-right: 2px;
}
</style>
