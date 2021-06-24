import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native'
import { globalStyles } from '../styles/global';
import api from '../api/api';


function ReadAppointment({ navigation }) {
     // const [appointment, setAppointment] = useState([])

     // useEffect(() => {
     //      api.get('getplaning')
     //      .then(resp => setAppointment(resp.data))
     //      .catch((error) => alert(error))
     // }, [])
     
     const onPress = (hour) => {
          navigation.navigate('Add Appointment', {
               hour: hour
          })
     }

     /*
     * Generate Time
     */
     var x = 30; //minutes interval
     var times = []; // time array
     var tt = 540; // start time
     var ap = ['AM', 'PM']; // AM-PM

     //loop to increment the time and push results in array
     for (var i=0; tt<15*60; i++) {
     var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
     var mm = (tt%60); // getting minutes of the hour in 0-55 format
     times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
     tt = tt + x;
     }

     
     return (
          <ScrollView>
          <View style={globalStyles.body}>
               {/* <Text>{times}</Text> */}
               {times.map(item => (
                    
                    <View key={item.key} style={globalStyles.card}>
                         <Pressable 
                         onPress={() => { onPress(item) }}
                         >
                         <Text style={globalStyles.titleText}>{item}</Text>
                         </Pressable>
                    </View>

               ))}

               {/* <FlatList 
               data={appointment}
               renderItem={({ item }) => (
                    <>
                    <View style={globalStyles.card}>
                         <Text>{item.num_rdv}</Text>
                    </View>
                    </>
               )}
               /> */}
               
          </View>
          </ScrollView>
     )
}

export default ReadAppointment
