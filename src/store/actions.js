import axios from 'axios';
export default {
    getPlaylistDetail({ commit }, { id }) {
        axios.get('/api/playlist/detail', { params: { id } }).then(response => {
            let { creator, description, name, tags, coverImgUrl } = response.data.result;
            commit('getPlaylistDetail', { playList: response.data.result });
            commit('updateAlbumInfo', {
                album: { creator, description, name, tags, coverImgUrl }
            });
        })
    },
    getSongUrl({ commit }, { id }) {
        axios({
            method: 'get',
            url: "/newapi/music/url?id=" + id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            console.log(response);
        });
    }
}