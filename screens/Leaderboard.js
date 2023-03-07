import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: height * 0.01,
    width: width * 0.9,
    marginLeft: width * 0.05,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    margin: width * 0.015,

  },
  circle: {
    width: width * 0.15, // 15% del ancho de la pantalla
    height: width * 0.15, // 15% del ancho de la pantalla
    borderRadius: width * 0.075, // la mitad del ancho para crear un círculo
    backgroundColor: '#87cefa',
    marginRight: 10,
  },
  highlighted: {
    backgroundColor: '#ffd700',
  },
  name: {
    fontSize: 16,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto', // mover el puntaje al final de la fila
  },
});

const generateNames = () => {
  const names = [];
  for (let i = 1; i <= 100; i++) {
    const name = {
      id: i,
      name: `Nombre ${i}`,
      score: Math.floor(Math.random() * 1000),
      highlighted: false,
    };
    names.push(name);
  }

  const sortedNames = [...names].sort((a, b) => b.score - a.score);
  const highlightedNames = sortedNames.slice(0, 3).map(name => ({ ...name, highlighted: true }));
  const nonHighlightedNames = sortedNames.slice(3).map(name => ({ ...name, highlighted: false }));
  return [...highlightedNames, ...nonHighlightedNames];
};

const RankingScreen = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    setNames(generateNames());
  }, []);

  return (
    <ScrollView>
      <View style={{ marginTop: height * 0.1 }} />
      {names.map(item => (
        <View key={item.id} style={[styles.item, item.highlighted && styles.highlighted]}>
          <View style={styles.circle} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.score}>{item.score}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default RankingScreen;





