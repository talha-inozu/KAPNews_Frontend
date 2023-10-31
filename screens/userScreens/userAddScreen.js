import React, { useState } from 'react';
import { View, Text, TextInput, Button , StyleSheet} from 'react-native';

function userAddScreen({ navigation }) {
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    
  });
  
  handleAddUser = async () => {
    // Perform POST request here using the userData state
    const response = await fetch('http://ec2-100-27-39-177.compute-1.amazonaws.com:6565/kapnewsapi/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // Handle success, e.g., navigate back to UsersViewScreen
      navigation.navigate('User List');
    } else {
      // Handle errors
      console.log("Error: " + response.status)
    }
  };

  return (
    <View>
      {}
      
      <TextInput
        style={styles.boxInput}
        autoCapitalize='none'
        placeholder="User Name"
        value={userData.username}
        onChangeText={(text) => setUserData({ ...userData, username: text })}
        
      />
      
      <TextInput
        style={styles.boxInput}
        autoCapitalize='none'
        placeholder="First Name"
        value={userData.firstName}
        onChangeText={(text) => setUserData({ ...userData, firstName: text })}
        
      />
      
      <TextInput
        style={styles.boxInput}
        autoCapitalize='none'
        placeholder="Last Name"
        value={userData.lastName}
        onChangeText={(text) => setUserData({ ...userData, lastName: text })}
        
      />
      
      <TextInput
        style={styles.boxInput}
        autoCapitalize='none'
        placeholder="Phone number"
        value={userData.phoneNumber}
        onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
        
      />
      <TextInput
        style={styles.boxInput}
        autoCapitalize='none'
        placeholder="Email"
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
      />
    
      

      {/* Add similar fields for firstName, id, phoneNumber, username */}
      <Button title="Add User" onPress={handleAddUser} style={styles.button} />
    </View>
  );
}
const styles = StyleSheet.create({
  boxInput: {
    alignItems: 'stretch',
    padding: 20,
    borderWidth: 1,
    margin: 10,
    
  },
  button:{
    padding: 50,
    marginBottom:30,
    marginTop:90,
  },
})
export default userAddScreen;
