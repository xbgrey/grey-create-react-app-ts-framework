import { ModulesBasic } from '../';

/**
 * RootState 页面跟的的类型
 */
export default abstract class ActionBasic<ModulesState> {

    /** 模块跟对象 */
    private modules: ModulesBasic<any, ModulesState>;

    /** 模块状态 */
    private _modulesState: ModulesState;

    /** 设置跟模块（不对外） */
    public setMdules = (modules: ModulesBasic<any, ModulesState>) => {
        this.modules = modules;
    }

    /**
     * 设置当前模块的状态
     * @param {*} state 状态
     * @param {Function} callBack 设置完成后的回掉
     */
    protected setModulesState = (state: ModulesState, callBack?: () => {}) => {
        this.modules.setState({ key: Math.random()*10000+new Date().getTime() } as any);
        this.modules.setState(state, callBack);
    }

    /** 当前模块的状态 */
    public get modulesState(): ModulesState {
        if (!this._modulesState) {
            this._modulesState = JSON.parse(JSON.stringify(this.modules.state));
        }
        return this._modulesState;
    }
}