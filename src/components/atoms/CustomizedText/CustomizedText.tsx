import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';

interface CustomTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
  bold?: boolean;
}

const CustomizedText: React.FC<CustomTextProps> = ({ style, bold, ...props }) => {
  let fontFamily = 'TitilliumWeb-Regular'; // Default to regular

  if (bold) {
    fontFamily = 'TitilliumWeb-Bold'; // Use bold variant if bold prop is true
  }

  return <Text style={[styles.text, { fontFamily }, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    // You can set default text styles here if needed
  },
});

export default CustomizedText;