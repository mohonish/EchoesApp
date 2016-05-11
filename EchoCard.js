import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class EchoCard extends Component {

  constructor(props) {
    super(props);
    this.echo = props.echo;
  }

  render() {
    debugger;
    return (
      <View style={styles.container}>
        <Image source={{uri: this.echo.thumbURL}} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.echo.title}</Text>
          <Text style={styles.subtitle}>By {this.echo.from}</Text>
        </View>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2'
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 10
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 8
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 8
  }
});

module.exports = EchoCard;
