import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import VideoPage from './src/Pages/VideoPage';

export default class App extends Component {
  render() {
    return (
      <View>
        <VideoPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
