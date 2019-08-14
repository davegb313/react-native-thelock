import React from 'react';

import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Rect, ClipPath} from 'react-native-svg';


export default class LockSvg extends React.Component {
  render() {
    return (
  <View style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}>
    <Svg version="1.1" viewBox="0 0 100 100" className="Lock">
      <Rect x={20} y={55} height={35} width={60} fill="black" />
      <Rect x={65} y={35} height={31} width={5} fill="black" />
      <ClipPath id="cut-off-bottom">
        <Rect x="0" y="-65" width="200" height="100" />
      </ClipPath>

      <Circle
        cx="50"
        cy="35"
        r="17.5"
        fill="none"
        stroke="black"
        strokeWidth="5"
        clipPath="url(#cut-off-bottom)"
      />

       <Rect x={30} y={35} height={31} width={5} fill="black" />

    </Svg>
  </View>
);
}
}
