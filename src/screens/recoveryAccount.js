import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import recoveryImage from '../assets/recoverylogo.png';  
import styles from '../styles/recoverystyle';  

export default function RecoveryAccount() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSendRecoveryLink = () => {
    alert('Recovery link sent to ' + email);
  };

  return (
    <View style={styles.container}>
      <Image source={recoveryImage} style={styles.image} /> 
      <Text style={styles.title}>Forgot Account?</Text>
      <Text style={styles.subtitle}>Recover Your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#333"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendRecoveryLink}>
        <Text style={styles.buttonText}>Send Recovery Link</Text>
      </TouchableOpacity>
      <Text style={styles.backToLogin}>
        Remembered your password?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Log in
        </Text>
      </Text>
    </View>
  );
}