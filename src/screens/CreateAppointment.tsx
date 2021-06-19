import axios from 'axios';
import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import DatePicker from 'react-native-datepicker'

function CreateAppointment({ navigation }) {

     const [numApt, setNumApt] = useState('')
     const [hourStart, setHourStart] = useState('')
     const [dateStart, setDateStart] = useState('')
     const [dateEnd, setDateEnd] = useState('')

     const [cus, setCus] = useState('')


     // const onPress = () => {
     //      navigation.goBack()
     // }

     const onSubmit = () => {
          axios.post('http://192.168.43.214:5000/createrdv', {
               nombre_rdv: numApt,
               heur_depart: hourStart,
               date_depart: dateStart,
               date_fin: dateEnd
          })
          .then(resp => alert(resp.data.message))
          .catch((error) => alert(error))
     }

     return (
          <>
          <View style={globalStyles.container}>
               <TextInput 
               placeholder="Number of appointment" 
               style={globalStyles.input}
               keyboardType="numeric"
               onChangeText={(val) => setNumApt(val)}
               />

               <TextInput 
               placeholder="Hour Start" 
               style={globalStyles.input} 
               // keyboardType="numeric" 
               onChangeText={(val) => setHourStart(val)}
               />

               <TextInput 
               placeholder="Date Start" 
               style={globalStyles.input} 
               onChangeText={(val) => setDateStart(val)}
               />

               <TextInput 
               placeholder="Date End" 
               style={globalStyles.input} 
               onChangeText={(val) => setDateEnd(val)}
               />


               <DatePicker
               style={globalStyles.InputDate}
               date={cus}
               mode="time"
               placeholder="select date"
               format="HH-MM"
               // minDate="2016-05-01"
               // maxDate="2016-06-01"
               // confirmBtnText="Confirm"
               // cancelBtnText="Cancel"
               customStyles={{
                    dateIcon: {
                         display: 'none'
                    }
               }}
               onDateChange={(date) => { setCus(date)}}
               />
               <Text>{cus}</Text>
               <Button title="Generate Appointment" onPress={() => { onSubmit() }} />
          </View>

          {/* <View style={globalStyles.container}>
               <TextInput style={globalStyles.input}/>
               <Text style={globalStyles.titleText}>I'm screen B</Text>
          </View> */}
          </>
     )
};

export default CreateAppointment;