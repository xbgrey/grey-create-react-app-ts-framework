import Event from '../Event';

class MessageItem {

    /** 消息类型 */
    public type: string;

    /** 消息方法 */
    public method: (e: Event) => void;

    /** 构造函数 */
    constructor(type: string, method: (e: Event) => void) {
        this.type = type;
        this.method = method;
    }
}

class Message {

    private typeId: number = 0;

    /** 注册项列表 */
    private registerList: MessageItem[] = [];

    /** 创建消息类型 */
    public createType = (name: string): string => {
        return `${name}@@${this.typeId++}`;
    }

    /**
     * 发送消息
     * @param event 消息
     */
    public send = (event: Event): void => {
        this.registerList.forEach((item: MessageItem) => {
            if (event.type === item.type) {
                item.method(event);
            }
        });
    }

    /**
     * 注册消息
     * @param type 消息类型
     * @param method 注册的代理函数
     */
    public on = (type: string, method: (e: Event) => void): void => {
        if (this.getIndex(type, method) === -1) {
            this.registerList.push(new MessageItem(type, method));
        }
    }

    /**
     * 注销消息
     * @param type 消息类型
     * @param method 注册的代理函数
     */
    public off = (type: string, method: (e: Event) => void): void => {
        const index: number = this.getIndex(type, method);
        if (index >= 0) {
            this.registerList.splice(index, 1);
        }
    }

    /**
     * 获取注册列表的索引
     * @param type 消息类型
     * @param method 注册的代理函数
     */
    private getIndex = (type: string, method: (e: Event) => void): number => {
        for (let i: number = 0; i < this.registerList.length; i++) {
            if (this.registerList[i].method === method && this.registerList[i].type === type) {
                return i;
            }
        }
        return -1;
    }
}

export default new Message();