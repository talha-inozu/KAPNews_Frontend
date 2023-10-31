// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const homeScreen = ({ navigation }) => {
  const navigateToUsers = () => {
    // Navigate to the Users page when the "Users" cell is tapped.
    navigation.navigate('User List');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToUsers}>
        <View style={styles.cell}>
          <Text>Users</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cell}>
          <Text>Mails</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});

export default homeScreen;
