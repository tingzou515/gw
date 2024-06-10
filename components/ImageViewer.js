import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ placeholderImageSource, style }) {
  return (
    <Image source={placeholderImageSource} style={[styles.image, style]} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,  // default width
    height: 440,  // default height
    borderRadius: 18,
  },
});
