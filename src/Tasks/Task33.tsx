import React, {useRef, useState} from 'react';
import {

  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');
const VIDEO_ASPECT = 9 / 16;

export default function Task33() {
  const [paused, setPaused] = useState(true);
  const videoRef = useRef(null);


  
  const videoSource = {uri: 'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4'};  
  const posterSource = require('../assets/images/p4.png'); 

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
   
      <View style={styles.playerWrapper}>
        <Pressable style={styles.touchArea} onPress={togglePlayPause}>
          <Video
            ref={videoRef}
            source={videoSource}
            style={styles.video}
            resizeMode="contain"
            paused={paused}
            controls={false} 
            poster={Image.resolveAssetSource(posterSource).uri}
            posterResizeMode="cover"
          />
        </Pressable>
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
    width: '100%',
    height: '100%',
  },
  touchArea: {
    flex: 1,
  },
});
