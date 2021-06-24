import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import api from '../api/api';
import DatePicker from 'react-native-modal-datetime-picker'

function CreateAppointment({ navigation }) {

     const [numApt, setNumApt] = useState('')
     const [dateStart, setDateStart] = useState('')
     const [dateEnd, setDateEnd] = useState('')

     // Inputs Pickers
     const [isVisible1, setVisibility1] = useState(false);
     const [isVisible2, setVisibility2] = useState(false);

     /*
     * Date Picker 01
     */
     const showDatePicker1 = () => {
     setVisibility1(true);
     };

     const hideDatePicker1 = () => {
     setVisibility1(false);
     };

     const handleConfirm1 = (date) => {
     const eDate = date.toISOString().split('T')[0]
     setDateStart(eDate)
     // console.warn(eDate)

     hideDatePicker1();
     };


     /*
     * Date Picker 02
     */
     const showDatePicker2 = () => {
     setVisibility2(true);
     };

     const hideDatePicker2 = () => {
     setVisibility2(false);
     };

     const handleConfirm2 = (date) => {
     const eDate = date.toISOString().split('T')[0]
     setDateEnd(eDate)
     hideDatePicker2();
     };


     // const onPress = () => {
     //      navigation.goBack()
     // }

     const onSubmit = () => {
          api.post('planing', {
               totalRDV: numApt,
               dateStart: dateStart,
               dateEnd: dateEnd
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

               <Text></Text>
               
               <View style={{
                    width: "90%"
               }}>
               <Button title="Date Start" onPress={showDatePicker1} />
               <DatePicker
                    isVisible={isVisible1}
                    mode="date"
                    onConfirm={handleConfirm1}
                    onCancel={hideDatePicker1}
               />
               <Text></Text>
               <Button title="Date End" onPress={showDatePicker2} />
               <DatePicker
                    isVisible={isVisible2}
                    mode="date"
                    onConfirm={handleConfirm2}
                    onCancel={hideDatePicker2}
               />
               <Text></Text>
               <Button 
               title="Generate Appointment" 
               onPress={() => { onSubmit() }} 
               color="green"
               />

               </View>

          </View>

          </>
     )
};

export default CreateAppointment;