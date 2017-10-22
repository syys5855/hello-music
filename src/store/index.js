import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
const state = new Vuex.Store({
    state: {
        songList: [],
        album: {
            name: '',
            creator: {
                nickname: '',
                backgroundUrl: ''
            },
            tags: [],
            description: '',
            coverImgUrl: ''
        }
    },
    mutations,
    actions
});

export default state;