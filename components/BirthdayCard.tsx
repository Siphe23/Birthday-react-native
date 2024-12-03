// BirthdayCard.js (or BirthdayCard.tsx if using TypeScript)
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BirthdayCard = () => {
  const bounceValue = useSharedValue(0);

  // States for customization
  const [message, setMessage] = useState('Wishing you joy and happiness!');
  const [inputText, setInputText] = useState('');
  const [decoration, setDecoration] = useState('#ff6347');

  // Trigger animation on mount
  useEffect(() => {
    bounceValue.value = withSpring(1, { damping: 5, stiffness: 150 });
  }, []);

  // Animated style for card
  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: bounceValue.value }],
  }));

  // Animated style for icon rotation
  const rotateValue = useSharedValue(0);
  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotateValue.value}deg` }],
  }));

  // Rotate icon on tap
  const handleIconPress = () => {
    rotateValue.value = withSpring(rotateValue.value + 360);
  };

  // Update the card message
  const handleUpdateMessage = () => {
    if (inputText.trim()) {
      setMessage(inputText);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Birthday Card 🎉</Text>
      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your custom message"
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Update Message" onPress={handleUpdateMessage} />
      </View>
      {/* Decoration Color Toggle */}
      <TouchableOpacity
        style={[styles.colorPicker, { backgroundColor: decoration }]}
        onPress={() => setDecoration(decoration === '#ff6347' ? '#4caf50' : '#ff6347')}
      >
        <Text style={styles.colorPickerText}>Toggle Decoration Color</Text>
      </TouchableOpacity>
      {/* Card with Animation */}
      <Animated.View style={[styles.card, animatedCardStyle]}>
        {/* Rotating Icon */}
        <TouchableOpacity onPress={handleIconPress}>
          <Animated.View style={animatedIconStyle}>
            <Icon name="cake" size={100} color={decoration} />
          </Animated.View>
        </TouchableOpacity>
        {/* Dynamic Message */}
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5ab',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  colorPicker: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  colorPickerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default BirthdayCard;
