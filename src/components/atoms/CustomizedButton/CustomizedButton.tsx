import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface CustomizedButtonProps {
  onPress: () => void;
  title: string;
  bold?: boolean; // Add bold prop
  containerStyle?: ViewStyle; // Additional style prop for button container
  buttonStyle?: ViewStyle; // Additional style prop for button itself
}

const CustomizedButton: React.FC<CustomizedButtonProps> = ({
  onPress,
  title,
  bold,
  containerStyle,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, containerStyle]} onPress={onPress}>
      <Text style={[buttonStyle, styles.buttonText, bold && styles.boldText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#347AF0',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'TitilliumWeb-Regular', // Default font family
  },
  boldText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'TitilliumWeb-Bold', // Switch to bold font family
    fontWeight: 'bold', // Ensure bold weight is applied (optional)
  },
});

export default CustomizedButton;
