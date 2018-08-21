import * as React from "react";
import { View, Text } from "react-native";
import baseStyle from './styles';


class Hello extends React.Component {
    render() {
        const { style, text } = this.props;
        let mergedstyle = {...baseStyle, ...style}
        return <Text style={mergedstyle.hello}> Hello, this is the text from props: {text} </Text>
    }
}

export { Hello }