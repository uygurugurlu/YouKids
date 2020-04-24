import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const SIZE = 130;
export default function CharacterComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.charCircle}>
        <Image
            style={{maxHeight:150,resizeMode :"contain"}}
            source={require('../ralph.png')}
        />
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZE + 10,
    width: SIZE + 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  charCircle: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: 'red',
    justifyContent:"center",
    alignItems:"center",
    overflow:"hidden",
  },
});
