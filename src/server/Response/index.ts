/**
 * AIP相应数据
 */
export default class Response<T> {

    /** 错误信息 */
    public er: any;

    /** 响应内容 */
    public res: T;

    /** 构造函数 */
    constructor(er?: any, res?: T) {
        this.er = er;
        this.res = res;
    }
}
