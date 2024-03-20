import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Főoldal" 
          component={HomeScreen} />
        <Tab.Screen name="Beállítások" 
          component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});