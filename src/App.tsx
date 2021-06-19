import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import CreateAppointment from './screens/CreateAppointment';
import ReadAppointment from './screens/ReadAppointment';
import AddAppointment from './screens/AddAppointment';

function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center'}}>
        <Drawer.Screen
        name="Home"
        component={Home}
        />
        <Drawer.Screen
        name="Create Appointment"
        component={CreateAppointment}
        />
        <Drawer.Screen
        name="View Appointment"
        component={ReadAppointment}
        />
        <Drawer.Screen
        name="Add Appointment"
        component={AddAppointment}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default App;