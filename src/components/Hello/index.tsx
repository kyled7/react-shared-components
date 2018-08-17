import React from "react";
import baseStyle from './styles';

export interface HelloProps {
    text: string,
    style: any
}

export class Hello extends React.Component <HelloProps, {}> {
    render() {
        let style = {...baseStyle, ...this.props.style}
        return <div style={style.hello}> Hello, this is the text from props: <b>{this.props.text}</b> </div>
    }
}