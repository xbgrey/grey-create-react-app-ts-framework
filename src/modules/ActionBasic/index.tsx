import * as React from 'react';
import { ModulesBasic } from '../';
import { Message, Event } from '../../message';

/** 更新了Start事件 */
class UpdateEvent extends Event {
    public static TYPE: string = Message.createType('UpdateEvent');

    constructor() {
        super(UpdateEvent.TYPE);
    }
}

/**
 * RootState 页面跟的的类型
 */
export default abstract class ActionBasic<ModulesState> {

    /** 模块跟对象 */
    private modules: ModulesBasic<any, ModulesState>;

    /** 模块状态 */
    private _modulesState: ModulesState;

    /** 内部消息 */
    private message = new Message();

    /** 设置跟模块（不对外） */
    public setMdules = (modules: ModulesBasic<any, ModulesState>) => {
        this.modules = modules;
    }

    /** 绑定组件 */
    public uiconnect = (Dmo): any => {
        const self: ActionBasic<ModulesState> = this;
        return class MyContainer extends React.PureComponent<any, any> {

            constructor(props: any) {
                super(props);
                this.state = { modulesState: self.modules.state };
            }

            componentWillMount() {
                self.message.on(UpdateEvent.TYPE, this.onUpdateHandler);
            }

            componentWillUnmount() {
                self.message.off(UpdateEvent.TYPE, this.onUpdateHandler);
            }

            render() {
                return (
                    <Dmo
                        {...this.props}
                        {...self.modules.props}
                        modulesState={this.state.modulesState}
                    >
                        {this.props.children}
                    </Dmo>
                );
            }

            private onUpdateHandler = () => {
                this.setState({ modulesState: self.modules.state });
            }
        };
    }

    /**
     * 设置当前模块的状态
     * @param {*} state 状态
     * @param {Function} callBack 设置完成后的回掉
     */
    protected setModulesState = (state: ModulesState, callBack?: () => {}) => {
        this.modules.setState({ key: Math.random() * 10000 + new Date().getTime() } as any);
        this.modules.setState(state, () => {
            this.message.send(new UpdateEvent());
            if (typeof callBack === 'function') {
                callBack();
            }
        });
    }

    /** 当前模块的状态 */
    public get modulesState(): ModulesState {
        if (!this._modulesState) {
            this._modulesState = JSON.parse(JSON.stringify(this.modules.state));
        }
        return this._modulesState;
    }
}