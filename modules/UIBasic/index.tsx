import { ActionBasic } from '../';
import ComponentBasic from '../../component/ComponentBasic';

/** UI基础类 */
export default abstract class UIBasic<P, ModulesState, S= {}> extends ComponentBasic<P, S> {
    
    private _action: ActionBasic<ModulesState>;

    constructor(props: P, action: ActionBasic<ModulesState>) {
        super(props);
        this._action = action;
    }

    /** 当前页面的状态 */
    protected get modulesState(): ModulesState {
        return this._action.modulesState;
    }
}