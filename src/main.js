import Vue from 'vue';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-default/index.css';
import '@/styles/index.css';
import App from '@views/app.vue';
import { Col, Row } from 'element-ui';
import routes from './routes.js'
import store from './store/index';
Vue.use(VueRouter);
Vue.use(Col);
Vue.use(Row);

let router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});

new Vue({
    el: "#app",
    router,
    store,
    render(h) {
        return h(App)
    }
});