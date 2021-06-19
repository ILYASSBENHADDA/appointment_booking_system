import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { globalStyles } from '../styles/global';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function OneScreen({ navigation }) {
     const navToAdmin = () => {
          navigation.navigate('Create Appointment')
     }

     const navToClient = () => {
          navigation.navigate('View Appointment')
     }

     return (
          <View style={globalStyles.container}>
               
               {/* Admin mode */}
               <Pressable onPress={navToAdmin}>
               <View style={globalStyles.iconBlock}>
               <FontAwesome5 
                    style={globalStyles.icon}
                    name='user-shield' 
               />
               </View>
               </Pressable>
               <Text style={globalStyles.titleText}>ADMIN MODE</Text>

               {/* Customer mode */}
               <Pressable onPress={navToClient}>
               <View style={globalStyles.iconBlock}>
                    <FontAwesome5
                    style={globalStyles.icon}
                    name='user' 
                    solid
                    />
               </View>
               </Pressable>
               <Text style={globalStyles.titleText}>CUSTOMER MODE</Text>

          </View>
     )
};

export default OneScreen;