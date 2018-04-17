import * as React from 'react';
export default abstract class ComponentBasic<P= {}, S= {}> extends React.PureComponent<P, S> {
    constructor(props: P) {
        super(props);
    }
}