/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaTareasScreen from './src/pantallas/ListaTareasScreen';
import NuevaTareaScreen from './src/pantallas/NuevaTareaScreen';
import { styles } from './src/styles/MyStyles';
import { AppProvider } from './src/context/AppContext';
import { AppContext } from './src/context/AppContext';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
 return (
    <AppProvider>
      <NavigationContainer onReady={()  => { StatusBar.setBackgroundColor('white'); StatusBar.setBarStyle('dark-content');}}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header
          }
          }>
          <Stack.Screen 
            name="ListaTareasScreen" 
            component={ListaTareasScreen}
            options={{  headerTitle: "",
                        headerStyle: styles.header,
                        headerTintColor: 'gray',
                        animation: 'fade'
                        }}/>

          <Stack.Screen 
            name="NuevaTareaScreen"
            component={NuevaTareaScreen}
            options={{  headerTitle: "",
                        headerStyle: styles.header,
                        headerTintColor: 'gray',
                        animation: 'fade'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
