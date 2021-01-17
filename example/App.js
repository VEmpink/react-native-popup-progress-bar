import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import PopupProgressBar from 'react-native-popup-progress-bar';

export default function App(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableHighlight
        underlayColor="red"
        onPress={() => {
          PopupProgressBar.show({
            title: 'Please wait...',
            message: 'Do not close the App!',
          });
        }}>
        <Text>Press Me!</Text>
      </TouchableHighlight>
    </View>
  );
}
