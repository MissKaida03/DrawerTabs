import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import registerStyles from '../styles/registerstyle';
import registerImage from '../assets/registerlogo.png'; 

export default function Register({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleRegister = () => {
    navigation.navigate('Layout');
  };

  return (
    <View style={registerStyles.registerContainer}>
      <Image source={registerImage} style={registerStyles.registerImage} />
      <Text style={registerStyles.registerTitle}>Register</Text>
      <Text style={registerStyles.registerSubtitle}>Create your account</Text>

      <TextInput
        style={registerStyles.input}
        placeholder="Email Address"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={registerStyles.input}
        placeholder="Name"
        placeholderTextColor="#fff"
      />

      <View style={registerStyles.passwordContainer}>
        <TextInput
          style={registerStyles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={registerStyles.passwordContainer}>
        <TextInput
          style={registerStyles.passwordInput}
          placeholder="Confirm Password"
          placeholderTextColor="#fff"
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Icon name={confirmPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={registerStyles.registerButton} onPress={handleRegister}>
        <Text style={registerStyles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={registerStyles.loginRedirectText}>
        Already Registered?{' '}
        <Text
          style={registerStyles.loginRedirectLink}
          onPress={() => navigation.navigate('Login')}
        >
          Log in here
        </Text>
      </Text>
    </View>
  );
}