import * as request from 'superagent';
import IResponse from '../IResponse';
import { CallType } from '../../ajax';
import { JSObject } from '../../kit';

/**
 * 请求服务器
 * @param type 请求类型
 * @param uri 地址
 * @param fnCallback 回调函数
 * @param params 参数
 * @param options 请求头
 */
function call(type: CallType, uri: string, fnCallback: (er: any, res: IResponse) => void, params: any, options: any = {}) {
    options = {
        'Content-Type': 'application/json',
        ...options,
    };

    params = JSObject.getClearBlankParas(params);

    request[type](uri)
        .set(options)[type === 'get' ? 'query' : 'send'](params)
        .end((err, res) => {
            if (err) {
                fnCallback(err, null);
            } else {
                fnCallback(null, res);
            }
        })
        .timeout(5000);
}

export default {
    call
};
