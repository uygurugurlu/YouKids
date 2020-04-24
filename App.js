import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import VideoPage from './src/Pages/VideoPage';
import MainPage from './src/Pages/MainPage';

export default class App extends Component {
  render() {
    return (
      <View>
        <MainPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
