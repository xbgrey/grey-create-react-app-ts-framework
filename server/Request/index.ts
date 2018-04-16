import { CallType } from 'src/utils/ajax';
import { Response } from '../';
import { Urls } from 'src/entry/constant';

/** Api请求数据 */
export default class Request {

    /** 请求类型 */
    public type: CallType = CallType.GET;

    /** api地址 */
    public uri: Urls;

    /** 回掉函数 */
    public callback: (value: Response<any>) => void = null;

    /** 请求参数 */
    public params: any = {};

    /** 请求头部信息 */
    public options: any = {};

    /** 是否显示错误信息 */
    public isShowModal: boolean = true;

    /**
     * 构造函数
     * @param type  请求类型
     * @param uri api地址
     * @param params  请求参数
     */
    constructor(type: CallType, uri: Urls, params: any) {
        this.uri = uri;
        this.params = params;
        this.type = type;
    }
}
