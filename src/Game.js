var React = require('react-native');
var GameBoard = require('./GameBoard');

var {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Text,
  ScrollView,
  addons,
  TouchableOpacity
  } = React;

var BOARD_SIZE = 4;


var Game = React.createClass({
  render() {
    return (
      <View  style={styles.container}>

        <View style={styles.headerArea}>
          <Text style={styles.header}>The fifteen game</Text>
          <Text style={styles.header2}>Slide tiles to put them in order.</Text>
        </View>

        <View style={styles.mainArea}>
          <GameBoard
            boardSize={BOARD_SIZE}/>
        </View>

        <View style={styles.bottomArea}>
          <TouchableOpacity onPress={this.newGame}>
            <Text style={styles.help}>Give up?</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  headerArea: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomArea: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: 15,
  },
  header2: {
    fontSize: 15,
    fontWeight: '200',
    textAlign: 'center',
  },
  help: {
    opacity: 0.7,
  }
});

module.exports = Game;