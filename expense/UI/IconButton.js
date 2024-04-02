import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable style={({pressed})=>pressed&&{opacity:0.75}}>
      <View style={styles.btnContainer}>
        <Ionicons name={icon} size={size} color={color} onPress={onPress} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
    marginHorizontal:12
  },
  pressed: {
    opacity: 0.75,
  },
});
