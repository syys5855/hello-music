import _ from 'lodash';
export default {
    safeGet: (val, path, defaultVal = "") => _.get(val, path, defaultVal);
}