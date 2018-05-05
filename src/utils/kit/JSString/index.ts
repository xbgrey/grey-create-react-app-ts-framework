/**
 * 随机字符串
 * @param len 返回值长度
 */
function randomABC(len: number = 10): string {
    const stencil: string = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
    let sum = '';
    for (let i = 0; i < len; i++) {
        sum += stencil.substr(Math.random() * stencil.length, 1);
    }
    return sum;
}

/**
 * 获取url中"?"符后的字串
 * @param url url中"?"符后的字串
 * @param name 参数名
 */
function getQueryString(search: string, name: string) {
    let reg: RegExp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'); // 匹配目标参数
    let result: string[] = search.substr(1).match(reg); // 对querystring匹配目标参数
    if (result != null) {
        return decodeURIComponent(result[2]);
    } else {
        return null;
    }
}

export default {
    randomABC,
    getQueryString
};