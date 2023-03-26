import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Homescreen extends React.Component {
  constructor() {
    super();
    this.state = {
      displayText: '',
      text: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Text Maximizer',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image
          source={require('../assets/LVtlJ.png')}
          style={styles.imagethingy}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({
              displayText: this.state.text,
            });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <Text style={styles.YADAYADAYAY}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagethingy: {
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
    height: 90,
    textAlign: 'center',
    borderWidth: 0,
    outline: 'none',
  },

  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },

  goButton: {
    width: '7%',
    height: 55,
    alignSelf: 'center',
    padding: 1,
    margin: 5,
  },

  YADAYADAYAY: {
    fontSize: 100,
    alignSelf: 'center',
  },
});
