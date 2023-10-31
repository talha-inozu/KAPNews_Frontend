import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { fetchUserData } from '../../userDataHelper/fetchUserData'; // Import the fetchUserData function from your ApiService.js

export default function userListScreen({navigation}) {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        console.log("load");
        console.log(data[0]);
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const renderItem = ({ item }) => (
    
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        // Handle item click here
        console.log(`Item clicked: ${item.firstName}`);
      }}
    >
      <Text>{item.firstName}</Text>
    </TouchableOpacity>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Button
        title="Add User"
        style={styles.button}
        onPress={() => navigation.navigate('Add User')}
      />
      <FlatList
        data={jsonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch', // Make items stretch horizontally
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 90,
    alignSelf: 'center', // Center the title horizontally
  },
  button:{
    padding: 50,
    marginBottom:30,
    marginTop:90,
  },
  item: {
    padding: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray', // Change the color of the grid line here
    marginLeft: 20, // Add margin to the left to align with the left screen edge
    marginRight: 20, // Add margin to the right to align with the right screen edge
  },
  listContent: {
    paddingHorizontal: 0, // Remove horizontal padding
  },
});
