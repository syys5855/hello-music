<template>
  <div class="cover" @click="$emit('click')">
      <div class="cover-img-wrap">
          <div class="cover-img">
             <img :src="imgUrl" alt="">
          </div>
          <div class="cover-listener">
            <i class="fa fa-headphones" aria-hidden="true"></i>
            <span>17万</span>
          </div>
      </div>
      <div class="cover-title" v-if="!hideTitle">
          我是测试啊
      </div>
  </div>
</template>

<script>
export default {
    props:['hideTitle','imgUrl']
}
</script>

<style lang="scss" scoped>
.cover{
    &-img-wrap{
        position: relative;
        width: 100%;
    }
    &-img{
        width: 100%;
        height: 100%;
        &>img{
            width:100%;
        }
    }

    &-listener{
        position: absolute;
        right: 5px;
        top: 5px;
        color: #fff;
    }
    &-title{
        height: 30px;
        padding-left:15px;
    }
}

</style>
