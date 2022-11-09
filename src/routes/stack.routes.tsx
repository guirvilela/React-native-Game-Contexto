import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import theme from '../styles/theme';
import Main from '../screens/Main';

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.bgColor,
          // paddingVertical: 15,
        },
      }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
