import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/LoginScreenStyles'; // Import the external styles

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/images/freshlens_logo.png')} // Ensure the image path is correct
        style={styles.logo}
        resizeMode="cover"
      />

      {/* Title */}
      <Text style={styles.title}>FreshLens</Text>

      {/* Login Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter your username" />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footerLinks}>
        <TouchableOpacity>
          <Text style={styles.link}>Sign-up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;