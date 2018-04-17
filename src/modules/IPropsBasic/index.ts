import { History, Location } from 'history';

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
}