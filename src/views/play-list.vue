<template>
    <div>
        <el-row>
          <list-cover style="height:200px;" :name="album.name" :nickname="nickName" :background-url="backgroundImg" :cover-img-url="album.coverImgUrl" :avatar-url="album.creator.avatarUrl"></list-cover>
        </el-row>
        <div class="albumn-info">
          <el-row  class="album-info-item">
            <el-col :span="3" :push="1">标签:</el-col>
            <el-col :span="19" :push="1">
              <span class="list-tag" v-for="(tag,index) in album.tags" :key="index">
                {{tag}}
              </span>
            </el-col>
          </el-row>
          <el-row class="album-info-item" >
            <el-col :span="3" :push="1">简介:</el-col>
            <el-col :span="19" :push="1">
            “如何把一份外卖吃出仪式感？”
            </el-col>
          </el-row>
          <el-row>
            <song-list :song-list="songList" :show-no='true' @click="clickSong"></song-list>
          </el-row>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import SongList from "@components/song-list.vue";
import ListCover from "@components/list-cover.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { SongList, ListCover },
  computed: {
    ...mapState(["songList", "album"]),
    nickName() {
      return _.get(this.album, "creator.nickname", "");
    },
    backgroundImg() {
      return _.get(this.album, "creator.backgroundUrl", "");
    }
  },
  created() {
    let id = this.$route.params.id;
    this.getPlaylistDetail({ id });
  },
  methods: {
    ...mapActions(["getPlaylistDetail"]),
    clickSong({ id }) {
      this.$router.push({ name: "song", params: { id: id } });
    }
  },
  beforeRouteEnter(to, from, next) {
    let id = _.get(to, "params.id");
    next();
  }
};
</script>

<style lang="scss" scoped>
.list-tag {
  position: relative;
  padding: 3px 8px;
  font-size: 12px;
  margin-right: 10px;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 300%;
    height: 300%;
    display: block;
    border-radius: 999px;
    transform-origin: top left;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transform: scale(0.3333);
  }
}
.albumn-info {
  margin-top: 10px;
}
.album-info-item {
  margin-bottom: 10px;
}
</style>
