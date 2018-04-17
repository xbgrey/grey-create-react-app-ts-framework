/**
 * 复制对象(深)
 * @param {*} value 被复制的对象
 * @returns {*} 对象副本 
 */
function getCopy(value: any): any {
    if (value instanceof Object) {
        return JSON.parse(JSON.stringify(value));
    } else {
        return value;
    }
}

/**
 * 对象去空（浅）
 * @param obj 
 * @returns 加工后的对象
 */
const getClearBlankParas = (obj: any): any => {
    if (obj instanceof Object) {
        let ret = {};
        for (const item in obj) {
            if (obj[item]) {
                ret[item] = obj[item];
            }
        }
        return ret;
    } else {
        return obj;
    }
};

export default {
    getClearBlankParas,
    getCopy,
};