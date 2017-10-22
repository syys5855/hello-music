import _ from 'lodash';
import Vue from 'vue';
export const registerCom = function(components) {
    let comArr = _.isArray(components) ? components : Array.from(components);
    comArr.forEach(com => {
        Vue.use(com);
    });
}

export const registerName = function(components) {
    let comArr = _.isArray(components) ? components : Array.from(components);
    let registerName = {};
    comArr.forEach(com => {
        registerName[com.name] = com;
    });
    return registerName;
}