import { History, Location } from 'history';
import { FormComponentProps } from 'antd/lib/form/Form';

/** 组建的props接口 */
export default interface IPropsBasic extends FormComponentProps{

    match?: {
        isExact: boolean,
        params: any,
        path: string,
        url: string,
    };

    history?: History;
    location?: Location;
}