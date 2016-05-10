import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class Echoes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: 'you'
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        var initPosition = JSON.stringify(pos);
        this.setState({location: initPosition});
      },
      (error) => {
        debugger;
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
      <Image style={styles.backgroundFillImage} source={require('./back1.jpg')}>
        <View style={styles.introView}>
          <Text style={styles.logo}>Echoes</Text>
          <Text style={styles.status}>Listening for echoes near {this.state.location}</Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  introView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    padding: 30,
  },
  logo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  status: {
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  backgroundFillImage: {
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  }
});

AppRegistry.registerComponent('Echoes', () => Echoes);
