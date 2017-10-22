<template>
    <el-row type="flex" align="middle" class="head-bar-wrap">
      <el-col :span="12">
        <i class="fa fa-music fa-2x  white"></i>
      </el-col>
      <el-col :span="12" class="text-right">
        <span class="font-sm white">测试一下</span>
      </el-col>
    </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$height: 64px;
$bgcolor: #d43c33;
.head-bar-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: $height;
  background-color: $bgcolor;
  padding: 0 15px;
  z-index: 10;
}
.head-bar {
}
</style>
