import React from 'react';
import { StyleSheet } from "react-native";
import * as Components from "../index";
import { storiesOf } from '@storybook/react';

let customStyle = StyleSheet.create({
    hello: {
        backgroundColor: 'green'
    }
})
storiesOf('Hello Component', module)
.add('default style', () => (
    <Components.Hello text="default style" />
))
.add('custom style', () => (
    <Components.Hello text="custom style" style={customStyle} />
));