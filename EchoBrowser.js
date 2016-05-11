import React, {
  Component,
  View,
  Text
} from 'react-native';

class EchoBrowser extends Component {

  constructor(props) {
    super(props);
    console.log("EchoBrowser init");
    this.state = {
      location: {
        latitude: '',
        longitude: ''
      }
    };
  }

  render() {
    return (
      <View>
        <Text>Hello World from EchoBrowser</Text>
      </View>
    );
  }

}

module.exports = EchoBrowser;
