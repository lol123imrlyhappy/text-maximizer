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
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  TextAnimationFadeIn,
  TextAnimationZoom,
  TextAnimationRain,
  TextAnimationSlideDown,
  TextAnimationSlideUp,
  TextAnimationSlideLeft,
  TextAnimationSlideRight,
  TextAnimationShake,
  TextAnimationReverse,
  TextAnimationDeZoom,
} from 'react-native-text-effects';

export default class Appscreen extends React.Component {
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
        <TextAnimationSlideDown
          value={
            'This is an app which increases the size of the letters which you type into the text box, By Nathan'
          }
          delay={10}
          duration={200}
          style={{ color: 'black', fontSize: 20 }}
        />
        <Text> </Text>
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.props.navigation.navigate('Homescreen');
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
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
