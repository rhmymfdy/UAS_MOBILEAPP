import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import SDscreen from './screen/SDscreen';
import SMPscreen from './screen/SMPscreen';
import SMAscreen from './screen/SMAscreen';
import InputSMA from './screen/InputMateriSMA';
import InputSD from './screen/InputMateriSD';
import InputSMP from './screen/InputMateriSMP';
import BacaSMA from './screen/BacaMateriSMA';
import BacaSD from './screen/BacaMateriSD';
import BacaSMP from './screen/BacaMateriSMP';
import EditSD from './screen/editSd';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SD"
          component={SDscreen}
        />
        <Stack.Screen
          name="SMP"
          component={SMPscreen}
        />
        <Stack.Screen
          name="SMA"
          component={SMAscreen}
        />
        <Stack.Screen
          name="InputSMA"
          component={InputSMA}
        />
        <Stack.Screen
          name="InputSD"
          component={InputSD}
        />
        <Stack.Screen
          name="EditSD"
          component={EditSD}
        />
        <Stack.Screen
          name="InputSMP"
          component={InputSMP}
        />
        <Stack.Screen
          name="BacaSMA"
          component={BacaSMA}
        />
        <Stack.Screen
          name="BacaSD"
          component={BacaSD}
        />
        <Stack.Screen
          name="BacaSMP"
          component={BacaSMP}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App