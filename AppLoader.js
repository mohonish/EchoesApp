import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

var ProgressBar = require('ProgressBarAndroid');
var ToastAndroid = require('ToastAndroid');

class AppLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: '',
        longitude: ''
      }
    };
    this.watchID = null;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        var initPosition = JSON.stringify(pos);
        this.setState({
          location: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        });
      },
      (error) => {
        ToastAndroid.show(error, ToastAndroid.SHORT);
      },
      {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 1000
      }
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
      console.log("got location. moving to EchoBrowser");
      debugger;
      this.props.navigator.push({index: 1});
    });

  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.backgroundFillImage} source={require('./back1.jpg')}>
          <View style={styles.introView}>
            <Text style={styles.logo}>Echoes</Text>
            <Text style={styles.status}>Listening for echoes near you - {this.state.location.latitude} - {this.state.location.longitude} </Text>
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

module.exports = AppLoader;
