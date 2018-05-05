import moment from 'moment';

/**  时间转 YYYY-MM-DD HH:mm */
const formatTime = timeStr => {
    if (timeStr) {
        return moment(timeStr).format('YYYY-MM-DD HH:mm');
    } else {
        return '';
    }
};

/** 时间转 YYYY-MM-DD */
const formatDate = timeStr => {
    if (timeStr) {
        return moment(timeStr).format('YYYY-MM-DD');
    } else {
        return '';
    }
};

/** 时间转 HH:mm:ss */
const formatHour = timeStr => {
    if (timeStr) {

        return moment(timeStr).format('HH:mm:ss');
    } else {
        return '';
    }
};

/** 数字格式化 */
const toThousands = (_num) => {
    let num = (_num || 0).toString(), result = '';
    let numnext = '';
    let numpre = '';
    if (num.indexOf('.') >= 0) {
        numnext = num.substring(num.indexOf('.'), num.length); // 小数点后
        numpre = num.substring(0, num.indexOf('.')); // 小数点前
    } else {
        numnext = '.00';
        numpre = num;
    }
    while (numpre.length > 3) {
        result = ',' + numpre.slice(-3) + result;
        numpre = numpre.slice(0, numpre.length - 3);
    }
    if (numpre) { result = numpre + result; }
    if (numnext) { result += numnext; }
    return result;
};

/** 数字转中文 */
const toStringChinese = (value) => {
    let numberValue = Math.round(value * 100).toString(); // 数字金额
    let chineseValue = ''; // 转换后的汉字金额
    let String1 = '零壹贰叁肆伍陆柒捌玖'; // 汉字数字
    let String2 = '万仟佰拾亿仟佰拾万仟佰拾元角分'; // 对应单位
    let len = numberValue.length; // numberValue 的字符串长度
    let Ch1; // 数字的汉语读法
    let Ch2; // 数字位的汉字读法
    let nZero = 0; // 用来计算连续的零值的个数
    let String3; // 指定位置的数值
    if (len > 15) {
        alert('超出计算范围');
        return '';
    }

    if (parseFloat(numberValue) === 0) {
        chineseValue = '零元整';
        return chineseValue;
    }
    String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值
    for (let i = 0; i < len; i++) {
        String3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
        if (i !== (len - 3) && i !== (len - 7) && i !== (len - 11) && i !== (len - 15)) {
            if (String3 === 0) {
                Ch1 = '';
                Ch2 = '';
                nZero++;
            } else if (String3 !== 0 && nZero !== 0) {
                Ch1 = '零' + String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            } else {
                Ch1 = String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            }
        } else { // 该位是万亿，亿，万，元位等关键位
            if (String3 !== 0 && nZero !== 0) {
                Ch1 = '零' + String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            } else if (String3 !== 0 && nZero === 0) {
                Ch1 = String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            } else if (String3 === 0 && nZero >= 3) {
                Ch1 = '';
                Ch2 = '';
                nZero++;
            } else {
                Ch1 = '';
                Ch2 = String2.substr(i, 1);
                nZero++;
            }
            if (i === (len - 11) || i === (len - 3)) { // 如果该位是亿位或元位，则必须写上
                Ch2 = String2.substr(i, 1);
            }
        }
        chineseValue = chineseValue + Ch1 + Ch2;
    }
    if (String3 === 0) { // 最后一位（分）为0时，加上“整”
        chineseValue += '整';
    }
    return chineseValue;
};

export default {
    formatTime,
    formatDate,
    formatHour,
    toStringChinese,
    toThousands,
};