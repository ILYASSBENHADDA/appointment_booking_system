import axios from 'axios'
import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { globalStyles } from '../styles/global'

const AddAppointment = ({ route }) => {
     const [nom, setNom] = useState('')
     const [prenom, setPrenom] = useState('')
     const [cin, setCin] = useState('')
     const [dn, setDn] = useState('')

     const { id, hour } = route.params

     const onSubmit = () => {
          axios.post(`http://192.168.43.214:5000/addrdv/${id}`, {
               nom: nom,
               prenom: prenom,
               cin: cin,
               date_naissance: dn
          })
          .then(resp => alert(resp.data))
          .catch((error) => alert(error))
     }

     return (
          <View style={globalStyles.container}>
               <Text style={globalStyles.titleText}>You choose: {hour}</Text>

               <TextInput 
               placeholder="Last Name" 
               style={globalStyles.input} 
               onChangeText={(val) => setNom(val)}
               />
               <TextInput 
               placeholder="First Name" 
               style={globalStyles.input} 
               onChangeText={(val) => setPrenom(val)}
               />          
               <TextInput 
               placeholder="CIN" 
               style={globalStyles.input} 
               onChangeText={(val) => setCin(val)}
               />          
               <TextInput 
               placeholder="Birth Date"
               style={globalStyles.input} 
               onChangeText={(val) => setDn(val)}
               />
               <Button title="Add Appointment" onPress={() => { onSubmit() }} />
          </View>
     )
}

export default AddAppointment
