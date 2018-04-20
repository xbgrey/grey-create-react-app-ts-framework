import { History, Location } from 'history';
import { WrappedFormUtils } from 'antd/lib/form/Form';

/** 组建的props接口 */
export default interface IPropsBasic {

    match?: {
        isExact: boolean,
        params: any,
        path: string,
        url: string,
    };  

    history?: History;
    location?: Location;

    /** antd 的 Fomr */
    form?: WrappedFormUtils;
}