import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View >
      {loading ? (
      <View>
          <ActivityIndicator size="large" color="#ff0000ff" />
          <Text >Loading...</Text>
       </View>
      ) : (
        <Text>Amro Shwayat</Text>
      )}
    </View>
  );
}


