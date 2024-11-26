import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function DrawerContent({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/profile-kristal.jpg')} 
          style={styles.profileImage} 
        />
        <Text style={styles.username}>Kristal Angeline Sarsoza</Text>
        <Text style={styles.email}>sarsoza.kristal2003@gmail.com</Text>
      </View>
      
      {/* Navigation Links */}
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard', { screen: 'Home' })} style={styles.linkButton}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard', { screen: 'Profile' })} style={styles.linkButton}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard', { screen: 'Settings' })} style={styles.linkButton}>
        <Text style={styles.link}>Settings</Text>
      </TouchableOpacity>

      {/* Logout Option */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={[styles.link, styles.logoutLink]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    backgroundColor: '#FBE9E7',
    paddingRight: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#F8BBD0',
    backgroundColor: '#FFF3F1',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 65,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#F8BBD0',
  },
  username: {
    fontSize: 19,
    fontWeight: '700',
    color: '#F06292',
    marginBottom: 5,
  },
  email: {
    fontSize: 13,
    color: '#F8A3B4',
    marginBottom: 5,
  },
  linkButton: {
    marginBottom: 14,
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: '#FFEBEE',
    borderRadius: 12,
    shadowColor: '#F06292',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 35,
  },
  link: {
    fontSize: 17,
    color: '#F06292',
    textAlign: 'center',
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#FFCDD2',
    borderRadius: 12,
    shadowColor: '#F06292',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 35,
  },
  logoutLink: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
});
