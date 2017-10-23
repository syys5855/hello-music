<template>
<div>
  <el-row  class="cover-group">
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:901077983}}" tag="div">
        <cover img-url="src/static/901077983.jpg"></cover>
      </router-link>
    </el-col>
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:907446361}}" tag="div">
        <cover img-url="src/static/907446361.jpg"></cover>
      </router-link>
    </el-col>
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:702453759}}" tag="div">
        <cover img-url="src/static/702453759.jpg"></cover>
      </router-link>
    </el-col>
  </el-row>

   <el-row  class="cover-group">
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:916136500}}" tag="div">
        <cover img-url="src/static/916136500.jpg"></cover>
      </router-link>
    </el-col>
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:948471242}}" tag="div">
        <cover img-url="src/static/948471242.jpg"></cover>
      </router-link>
    </el-col>
    <el-col :span="8" class="cover-item">
      <router-link :to="{name:'play-list',params:{id:963463438}}" tag="div">
        <cover img-url="src/static/963463438.jpg"></cover>
      </router-link>
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
