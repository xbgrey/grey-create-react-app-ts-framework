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

export default {
    randomABC,
};