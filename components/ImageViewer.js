import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ placeholderImageSource, style }) {
  return (
    <Image source={placeholderImageSource} style={[styles.image, style]} />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    borderRadius: 18,
  },
});
