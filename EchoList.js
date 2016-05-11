import React, {
  Component,
  ListView,
  Text
} from 'react-native';

var EchoCard = require('./EchoCard');
var sampleThumbURL = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png';

class EchoList extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {title: 'Row 1', body: 'Lorem ipsum dolor sit amet', from: 'Bob', 'createDate': '', thumbURL: sampleThumbURL},
        {title: 'Row 2', body: 'Lorem ipsum dolor sit amet', from: 'Alice', 'createDate': '', thumbURL: sampleThumbURL}
      ])
    };
  }

  renderEcho(rowData) {
    return (
      <EchoCard echo={rowData} />
    );
  }

  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderEcho}
      />
    );
  }

}

module.exports = EchoList;
