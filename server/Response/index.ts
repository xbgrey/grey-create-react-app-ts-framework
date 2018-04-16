/**
 * AIP相应数据
 */
export default class Response<T> {

    /** 错误信息 */
    public er: any;

    /** 响应内容 */
    public body: T;

    /** 构造函数 */
    constructor(er?: any, body?: T) {
        this.er = er;
        this.body = body;
    }
}
