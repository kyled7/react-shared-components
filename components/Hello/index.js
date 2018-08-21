import * as React from "react";
import { View, Text } from "react-native";
import baseStyle from './styles';


class Hello extends React.Component {
    render() {
        const { style, text } = this.props;
        let mergedstyle = {...baseStyle, ...style}
        return (
            <View style={mergedstyle.hello}>
                <Text> Hello, this is the text from props: {text} </Text>
            </View>
        )
    }
}

export { Hello }