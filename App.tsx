import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Home Screen
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FlowIt</Text>
      <Text style={styles.subtitle}>Create your yoga flows with ease!</Text>
    </View>
  );
}

// Create Flow Screen
function CreateFlowScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Flow</Text>
    </View>
  );
}

// Saved Flows Screen
function SavedFlowsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Flows</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Create Flow" component={CreateFlowScreen} />
        <Tab.Screen name="Saved Flows" component={SavedFlowsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF3E0', // Pastel beige background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D9886', // Calming green
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#A49393', // Muted pastel brown
  },
});
