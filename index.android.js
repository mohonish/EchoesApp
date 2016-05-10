import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

var ProgressBar = require('ProgressBarAndroid');

class Echoes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        var initPosition = JSON.stringify(pos);
        this.setState({location: initPosition});
      },
      (error) => {
        alert(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.backgroundFillImage} source={require('./back1.jpg')}>
          <View style={styles.introView}>
            <Text style={styles.logo}>Echoes</Text>
            <Text style={styles.status}>Listening for echoes near you - {this.state.location}</Text>
            <ProgressBar style={styles.progress} styleAttr="Horizontal" indeterminate={true} />
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  introView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    padding: 0
  },
  logo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  status: {
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  progress: {
    alignSelf: 'stretch',
    padding: 0,
    margin: 0,
    marginBottom: -7
  },
  backgroundFillImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  }
});

AppRegistry.registerComponent('Echoes', () => Echoes);
