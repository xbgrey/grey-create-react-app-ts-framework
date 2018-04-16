import ComponentBasic from '../../component/ComponentBasic';
import { ActionBasic } from '../';

/** 页面基础类 */
export default abstract class ModulesBasic<P, ModulesState> extends ComponentBasic<P, ModulesState> {

    private _action: ActionBasic<ModulesState>;

    /** 构造函数 */
    constructor(props: P, action: ActionBasic<ModulesState>) {
        super(props);
        this._action = action;
        this._action.setMdules(this);
    }

    /** 当前页面的状态 */
    protected modulesState(): ModulesState {
        return this._action.modulesState;
    }
}
