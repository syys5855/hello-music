import HomePage from '@views/home-page.vue';
import Rank from '@views/rank.vue';
import Search from '@views/search.vue';
import Recommend from '@views/recommend.vue';
import Playlist from '@views/play-list.vue';

export default [{
        path: '/home-page',
        component: HomePage,
        children: [
            { path: 'rank', component: Rank },
            { path: 'recommend', component: Recommend },
            { path: 'search', component: Search }
        ]
    },
    {
        path: '/play-list/:id',
        name: 'play-list',
        component: Playlist
    }
]