<template>
  <el-row type="flex" align="middle" justify="space-around" class="list-cover-wrap">
    <div class="list-cover-wrap bg" :style="{'background-image':'url('+coverImgUrl+')'}"></div>
    <el-row class="list-cover" type="flex" justify="space-around">
        <el-col :span="8" class="list-cover-img-wrap">
            <cover :hide-title='true' :img-url="coverImgUrl"></cover>
            <div class="list-cover-img-tag font-xs">歌单</div>
        </el-col>
        <el-col :span="15" class="list-cover-intro">
            <h5 class="list-cover-title font-lg">{{name}}</h5>
            <div class="list-cover-artists font-xs">
                <div :span="8" class="list-cover-artists-icon">
                    <img :src="coverImgUrl" alt="">
                </div>
                &nbsp;{{nickname}}
            </div>
        </el-col>
    </el-row>
  </el-row>
</template>

<script>
import Cover from "@components/cover";
export default {
  props: ["name",'nickname','backgroundUrl','coverImgUrl'],
  components: { Cover }
};
</script>

<style lang="scss" scoped>
$iconSize: 30px;
.list-cover-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  .bg{
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url("../static/cover.jpg") center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(20px);
    transform: scale(1.5);
  }
}

.list-cover {
  width: 95%;
  &-img-wrap {
    position: relative;
    & > img {
      width: 100%;
    }
  }
  &-img-tag {
    position: absolute;
    left: 0;
    top: 10px;
    z-index: 11;
    height: 17px;
    line-height: 13px;
    padding: 2px 10px;
    text-align: center;
    background-color: rgba(217, 48, 48, 0.8);
    color: #fff;
    border-radius: 0 17px 17px 0;
  }

  &-intro {
    display: flex;
    flex-direction: column;
  }
  &-title {
    color: #fefefe;
    line-height: 22px;
  }

  &-artists {
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: hsla(0, 0%, 100%, 0.7);
    &-icon {
      width: $iconSize;
      height: $iconSize;
      & > img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
