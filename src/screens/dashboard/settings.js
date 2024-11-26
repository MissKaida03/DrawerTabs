import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from '../../styles/settingstyle'; 

export default function Settings({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Login'); 
  };

  const navigateToPrivacy = () => {
    navigation.navigate('PrivacySettings');
  };

  const navigateToNotifications = () => {
    navigation.navigate('NotificationSettings');
  };

  const navigateToTheme = () => {
    navigation.navigate('ThemeSettings');
  };

  return (
    <ImageBackground
      source={require('../../assets/home-bg.jpg')} 
      style={styles.container} 
      resizeMode="cover" 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Settings</Text>

        {/* General Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <TouchableOpacity style={styles.optionButton} onPress={navigateToPrivacy}>
            <Text style={styles.optionText}>Privacy Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={navigateToNotifications}>
            <Text style={styles.optionText}>Notification Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={navigateToTheme}>
            <Text style={styles.optionText}>Theme Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Account Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Manage Subscriptions</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}