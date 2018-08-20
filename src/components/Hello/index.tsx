import * as React from "react";
import { View, Text } from "react-native";
import baseStyle from './styles';

export interface HelloProps {
    text: string,
    style?: any
}

export class Hello extends React.Component <HelloProps, {}> {
    render() {
        let style = {...baseStyle, ...this.props.style}
        return <View style={style.hello}> Hello, this is the text from props: <Text>{this.props.text}</Text> </View>
    }
}