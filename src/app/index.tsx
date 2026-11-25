import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4DzoYRMNJhk9_dcB1N-ZSqn37NZLmJwU",
  authDomain: "colegio-2f09a.firebaseapp.com",
  projectId: "colegio-2f09a",
  storageBucket: "colegio-2f09a.firebasestorage.app",
  messagingSenderId: "436934817842",
  appId: "1:436934817842:web:d043ba2e5ce6a1e891e42b",
  measurementId: "G-EEG6WYW4M6"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth= getAuth(app);



export default function login() {
  const [email, setEmail]=useState<string>("");
  const [password, setPassword]=useState<string>("");
  const [loading, setLoading]=useState<boolean>(false);

  const navigation = useRouter();

  const handleSignin = async () => {
    setLoading(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text>Ingresa aqui</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.emailContainer}>
          <Text>Email:</Text>
          <TextInput
            placeholder='Coloca tu Correo Electronico'
            style={styles.emailInput}
            keyboardType='email-address'
            onChangeText={(text)=>setEmail(text)}
            value = {email}
          >
          </TextInput>
        </View>
        <View style={styles.passwordContainer}>
          <Text>Contraseña:</Text>
          <TextInput
            placeholder='Coloca tu Contraseña'
            style={styles.passwordInput}
            secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}
            value = {password}
          >
          </TextInput>
        </View>
        {/*Olvidar Password */}
        <View style={styles.olvidarContainer}>
          <TouchableOpacity onPress={()=> navigation.push("Forgot")}>
            <Text style={styles.Olvidar}>Olvidste tu Contraseña</Text>
          </TouchableOpacity>
        </View>
        {/*Boton Login*/}
        <View style={styles.loginButton}>
          <TouchableOpacity onPress={handleSignin}>
            <Text style={styles.loginButtonText}>
              {loading ? "Loading" : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loginHeader: {
    alignItems: 'center',
    marginBottom: 25,
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  emailContainer: {
    marginBottom: 15,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 5,
  },
  passwordContainer: {
    marginBottom: 10,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 5,
  },
  olvidarContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 15,
  },
  Olvidar: {
    color: '#007BFF',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});