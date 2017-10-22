export default {
    getPlaylistDetail(state, { playList }) {
        let { tracks: songList } = playList;
        state.songList = songList;
    },
    updateAlbumInfo(state, { album }) {
        this.state.album = album;
    }

}