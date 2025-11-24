// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import LearnTopicsScreen from './src/screens/LearnTopicsScreen';
import LearnIntroScreen from './src/screens/LearnIntroScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';
import BattleSetupScreen from './src/screens/BattleSetupScreen';
import BattleQuizScreen from './src/screens/BattleQuizScreen';
import BattleResultScreen from './src/screens/BattleResultScreen';

import { ProgressProvider } from './src/context/ProgressContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#020617' },
            headerTintColor: '#e5e7eb',
            contentStyle: { backgroundColor: '#020617' },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'React Battle Quiz' }}
          />
          <Stack.Screen
            name="LearnTopics"
            component={LearnTopicsScreen}
            options={{ title: 'Modo Aprender' }}
          />
          <Stack.Screen
            name="LearnIntro"
            component={LearnIntroScreen}
            options={{ title: 'Explicação do Tema' }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{ title: 'Quiz - Modo Aprender' }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{ title: 'Resultado' }}
          />
          <Stack.Screen
            name="BattleSetup"
            component={BattleSetupScreen}
            options={{ title: 'Modo Batalha' }}
          />
          <Stack.Screen
            name="BattleQuiz"
            component={BattleQuizScreen}
            options={{ title: 'Batalha' }}
          />
          <Stack.Screen
            name="BattleResult"
            component={BattleResultScreen}
            options={{ title: 'Resultado da Batalha' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProgressProvider>
  );
}
