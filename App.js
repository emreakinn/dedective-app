import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import ScenarioListScreen from './src/screen/ScenarioListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScenarioDetailScreen from './src/screen/ScenarioDetailScreen';
import SuspectsScreen from './src/screen/SuspectsScreen';
import CluesScreen from './src/screen/CluesScreen';
import CharactersScreen from './src/screen/CharactersScreen';
import SolutionScreen from './src/screen/SolutionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ScenarioListScreen" component={ScenarioListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ScenarioDetailScreen" component={ScenarioDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SuspectsScreen" component={SuspectsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CluesScreen" component={CluesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CharactersScreen" component={CharactersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SolutionScreen" component={SolutionScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
