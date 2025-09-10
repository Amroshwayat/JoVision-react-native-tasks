import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, Pressable, Text} from 'react-native';
import Video from 'react-native-video';
import {Image} from 'react-native';



const {width} = Dimensions.get('window');
const VIDEO_ASPECT = 9 / 16;

export default function App() {
  const [paused, setPaused] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const videoSource = {uri: 'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4'};
  const posterSource = require('../assets/images/p.png');

  return (
  
      <View style={styles.playerWrapper}>
  
        <Video
          source={videoSource}
          style={styles.video}
          resizeMode="contain"
          paused={paused}
          onLoad={() => setIsLoaded(true)}
          onEnd={() => {
            setPaused(true);
          }}
          controls={true}
          poster={posterSource.uri}
          posterResizeMode="cover"
        />

     
        {paused && (
          <Pressable style={styles.posterOverlay} onPress={() => setPaused(false)}>
            <Image
              source={posterSource}
              style={styles.posterImage}
              resizeMode="cover"
            />
            <View style={styles.playButton}>
              <Text style={styles.playText}>Play</Text>
            </View>
          </Pressable>
        )}
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerWrapper: {
    width: width,
    height: width * VIDEO_ASPECT,
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  posterOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  playButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 24,
  },
  playText: {
    color: '#fff',
    fontWeight: '600',
  },
});
