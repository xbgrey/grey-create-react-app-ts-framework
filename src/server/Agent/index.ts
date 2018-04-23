import Superagent from '../../utils/ajax/Superagent';
import { Request, Response } from '../';

export default class Agent {

    /** 当前实例 */
    private static _instance: Agent;

    /** 获取当前实例 */
    public static get instance(): Agent {
        if (!Agent._instance) {
            Agent._instance = new Agent();
        }
        return Agent._instance;
    }

    /** 构造函数 */
    constructor() {
        if (Agent._instance) {
            throw ('[api.Agent]对象为单利');
        }
    }

    /**
     * 向服务器发送一个请求
     * @param request 一个请求
     * @param domain 请求地址头
     * @param mock 是否用mock数据
     */
    public call = (request: Request, domain: string, mock: boolean): Promise<Response<any>> => {
        return new Promise((resolve: (value: Response<any>) => void) => {

            const superagentCallback = (er, res) => {
                const info: Response<any> = new Response(er, res); // 返回数据
                this.runCallback(info, request.callback, resolve); // 调用回掉
            };

            if (mock && window['$$_kxl_mock'] && window['$$_kxl_mock'][request.uri]) {
                setTimeout(
                    () => {
                        console.info('[mock][' + request.uri + ']', window['$$_kxl_mock'][request.uri]);
                        superagentCallback(null, window['$$_kxl_mock'][request.uri]);
                    }, 100);
            } else {
                Superagent.call(request.type, domain + request.uri, superagentCallback, request.params, request.options);
            }
        });
    }

    /**
     * 调用回掉函数
     * @param value 参数
     * @param fns 函数集合
     */
    private runCallback = (value: any, ...fns: Array<(value: any) => void>) => {
        fns.forEach(fn => {
            if (typeof fn === 'function') {
                fn(value);
            }
        });
    }
}