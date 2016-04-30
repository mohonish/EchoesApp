/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class Echoes extends Component {
  render() {
    return (
      <Image style={styles.backgroundFillImage} source={require('./back1.jpg')}>
        <Text style={styles.welcome}>
          Echoes
        </Text>
        <Text style={styles.instructions}>
          Listening for echoes near you.
        </Text>
      </Image>
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
  backgroundFillImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  }
});

AppRegistry.registerComponent('Echoes', () => Echoes);
