import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

var AppLoader = require('./AppLoader');
var EchoBrowser = require('./EchoBrowser');

class Echoes extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{name: 'AppLoader', index: 0}}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.index) {
      case 0:
      return (<AppLoader navigator={navigator} />);
      case 1:
      return (<EchoBrowser navigator={navigator} />);
    }
  }

}

AppRegistry.registerComponent('Echoes', () => Echoes);
