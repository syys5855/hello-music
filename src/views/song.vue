<template>
  <div>
    <h1>song</h1>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  created() {
    let songId = this.$route.params.id;
    // console.log(songId);
    this.getSongUrl({id:songId});
  },
  methods:{
    ...mapActions([
      'getSongUrl'
    ])
  }
};
</script>

<style>

</style>
