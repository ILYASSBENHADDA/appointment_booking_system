import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import api from '../api/api';

const AddAppointment = ({ route }) => {
     const [nom, setNom] = useState('')
     const [prenom, setPrenom] = useState('')
     const [email, setEmail] = useState('')
     const [cin, setCin] = useState('')
     const [phone, setPhone] = useState('')

     const { hour } = route.params

     const onSubmit = () => {
          api.post('rendezvous', {
               lastName: nom,
               firstName: prenom,
               email: email,
               CIN: cin,
               phone: phone,
               rdvHour: hour
          })
          .then(resp => alert(resp.data.message))
          .catch((error) => alert(error))
     }

     return (
          <View style={globalStyles.container}>
               <Text style={globalStyles.titleText}>You choose: {hour}</Text>

               <Text></Text>          
               
               <TextInput 
               placeholder="Last Name" 
               style={globalStyles.input} 
               onChangeText={(val) => setNom(val)}
               />
               
               <Text></Text>          
               
               <TextInput 
               placeholder="First Name" 
               style={globalStyles.input} 
               onChangeText={(val) => setPrenom(val)}
               />
               
               <Text></Text>          
                         
               <TextInput 
               placeholder="Email" 
               style={globalStyles.input} 
               onChangeText={(val) => setEmail(val)}
               />
               
               <Text></Text>          
                         
               <TextInput 
               placeholder="CIN" 
               style={globalStyles.input} 
               onChangeText={(val) => setCin(val)}
               />

               <Text></Text>          
               
               <TextInput 
               placeholder="Phone"
               style={globalStyles.input} 
               onChangeText={(val) => setPhone(val)}
               />
               
               <Text></Text>          
               
               <Button title="Add Appointment" onPress={() => { onSubmit() }} />
          </View>
     )
}

export default AddAppointment
