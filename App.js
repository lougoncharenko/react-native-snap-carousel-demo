import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import CarouselCards from "./components/Carousel";

export default function App() {
  const [exercises, setExercises] = useState([]);
  return (
    <View style={styles.container}>
      <CarouselCards/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 70
  },
});
