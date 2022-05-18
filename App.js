import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-url-polyfill/auto';
import iot from './utils/iot';

const App = () => {
  React.useEffect(() => {
    (async () => {
      try {
        iot.register()
      } catch (error) {
        console.log(error)
      }
    })()

  }, [])
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

export default App;
