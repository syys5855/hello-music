<template>
   <el-row type="flex" align="middle" justify="space-between" class="song-list-item">
      <el-col :span="20">
          <div class="song-name">{{songName}}</div>
          <div class="song-songer font-xs">{{songer}}</div>
      </el-col>
      <el-col :span="4" class="text-right">
          <i class="fa fa-play-circle fa-2x" style="color:rgb(185, 176, 176)"></i>
      </el-col>
  </el-row>
</template>

<script>
import _ from "lodash";
export default {
  props: ["songName", "artists", "album"],
  computed: {
    songer() {
      return _.map(this.artists, artist => artist.name).join("/");
    }
  }
};
</script>

<style scoped>
.song-songer {
  margin-top: 5px;
  color: #888;
}
</style>
