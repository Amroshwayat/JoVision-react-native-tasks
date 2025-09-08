import React from 'react';
import { View, Image, Alert, FlatList, Pressable, StyleSheet } from 'react-native';

export default function App() {

  const images = [
      require('../assets/images/p.png'),
      require('../assets/images/p4.png'),
      require('../assets/images/p5.png'),
      require('../assets/images/p6.webp'),
      require('../assets/images/p7.png'),
    require('../assets/images/p8.webp'),
    require('../assets/images/p9.png'),
    require('../assets/images/p10.png'),
    require('../assets/images/p11.webp'),
    require('../assets/images/R.jpg'),
  ];


  const handlePress = (index: number) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePress(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
