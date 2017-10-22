<template>
    <ul class="list-group">
        <li class="list-group-item  song-item-wrap" v-for="(song,index) in songList" :key="song.id"> 
            <el-row type="flex" align="middle">
                <el-col :span='2' v-if="showNo">
                    {{index+1}}
                </el-col>
                <el-col :span='showNo?22:24'>
                    <song-list-item :song-name="song.name" :artists="song.artists" :album="song.album"></song-list-item>
                </el-col>
            </el-row>
        </li>
    </ul>
</template>

<script>
import SongListItem from "@components/song-list-item.vue";
export default {
  components: { SongListItem },
  props: ["songList",'showNo']
};
</script>

<style scoped>
.song-item-wrap {
  border: none;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
