import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  View,
} from 'react-native';
const data = [
  {id: '1', name: 'sa'},
  {id: '3', name: 'sa'},
  {id: '2', name: 'sa'},
  {id: '5', name: 'sa'},
];
export default class MainPage extends Component {
  render() {
    return (
      <SafeAreaView>
        <SafeAreaView style={styles.charactersSection}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Karakterler</Text>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <Text style={{width: 300}}>{item.name}</Text>
            )}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  charactersSection: {},
  headerContainer: {
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
