import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native'
import { globalStyles } from '../styles/global';
function ReadAppointment({ navigation }) {
     const [appointment, setAppointment] = useState([])

     useEffect(() => {
          axios.get('http://192.168.43.214:5000/dayrdv')
          .then(resp => setAppointment(resp.data))
          .catch((error) => alert(error))
     }, [])
     
     const onPress = (id, hour) => {
          navigation.navigate('Add Appointment', {
               id: id,
               hour: hour
          })
     }

     return (
          <ScrollView>
          <View style={globalStyles.body}>
               {appointment.map(item => (
                    
                    <View key={item.key} style={globalStyles.card}>
                         <Pressable 
                         onPress={() => { onPress(item._id, item.heur_rdv) }}
                         >
                         <Text style={globalStyles.titleText}>{item.heur_rdv}</Text>
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
