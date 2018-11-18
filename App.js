import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {

  async hi() {
    return Promise.resolve("let's get excited.")
  }

  async sayHi() {
    const hi = await this.hi()
    console.log(hi);
    Alert.alert("New jsc", "With all fantastic feature like es6 and es8")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native With New JSC!</Text>
        <Button title={"ClickMe"} onPress={() => this.sayHi()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
