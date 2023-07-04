import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './component/ImageViewer';
import Button from './component/Button';

const PlaceholderImage = require('./assets/jayce.png');

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({allowsEditing: true, quality: 1});
  }

  if (!result.canceled) {
    console.log(result);
  } else {
    alert('You did not select any image');
  }
};

  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
          <Text style={styles.text}>CHEIS</Text>
          <Button label="Choose a photo" theme={"primary"} />
          <Button label="Use this photo" theme={"normal"} />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25293e',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
