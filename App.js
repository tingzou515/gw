import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import ImageViewer from './components/ImageViewer';
import Sound from 'react-native-sound';

const BabyImage1 = require('./assets/images/formal.png');
const BabyImage2 = require('./assets/images/new_butt.png');
const BabyImage3 = require('./assets/images/baby.png');


export default function App() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Fetch the existing like count from AsyncStorage when the app loads
    const fetchLikes = async () => {
      const storedLikes = await AsyncStorage.getItem('likes');
      if (storedLikes) setLikes(parseInt(storedLikes));
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    // Store the new like count in AsyncStorage
    await AsyncStorage.setItem('likes', newLikes.toString());
  };

  return (
    <ScrollView style={styles.container}>
      <Animatable.Text 
          animation="pulse" 
          easing="ease-out" 
          iterationCount="infinite" 
          style={{ textAlign: 'center', fontSize: 45, color: '#fff', fontWeight: 'bold'}}>
          ❤️Greg Wood & Ting Zou❤️
      </Animatable.Text>
      
      <View style={styles.imageRow}>
        <View style={styles.imageWithCaption}>
          <ImageViewer placeholderImageSource={BabyImage1} />
          <Text style={styles.caption}>Picture at Lesbian Ceremony</Text>
        </View>
        <View style={styles.imageWithCaption}>
          <ImageViewer placeholderImageSource={BabyImage2} />
          <Text style={styles.caption}>Cutest Butt in the World</Text>
        </View>
        <View style={styles.imageWithCaption}>
          <ImageViewer placeholderImageSource={BabyImage3} />
          <Text style={styles.caption}>Our future 50/50 baby</Text>
        </View>
      </View>
      <Text style={styles.subheaderText}>Love Story</Text>
      <Text style={styles.storyText}>
        We met at a vegan store, fought over the last Impossible Sausage. Greg suggested, "How about I eat this vegan one, and you eat mine?" And now here we are.
      </Text>
      <Button title="Like our story" onPress={handleLike} />
      <Text style={styles.likeCountText}>Likes: {likes}</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    paddingTop: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20, // Changed value
    marginTop: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subheaderText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  storyText: {
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 30,
  },
  imageWithCaption: {
    flex: 1,
    alignItems: 'center',
  },
  caption: {
    color: '#fff',
    fontSize: 18,
    marginTop: 7,
    textAlign: 'center',
  },
  likeCountText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});
