import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', (newDimensions) => {
      setDimensions(newDimensions.window);
    });
    // Check if dimensions are 0 and re-render if necessary
    if (dimensions.width === 0 || dimensions.height === 0) {
        console.log("Re-rendering");
    }
    return () => subscription?.remove();
  }, [dimensions]);

  return (
    <View style={{ width: dimensions.width, height: dimensions.height, backgroundColor: 'skyblue' }}>
      <Text>Width: {dimensions.width}, Height: {dimensions.height}</Text>
    </View>
  );
};

export default MyComponent;