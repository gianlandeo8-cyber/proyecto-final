import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Import the functions you need from the SDKs you need
import { router } from 'expo-router';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATNzAdh4Barx42MMPOkuwof-i1aFmRc7c",
  authDomain: "://firebaseapp.com",
  projectId: "rapipollo-212fe",
  storageBucket: "rapipollo-212fe.firebasestorage.app",
  messagingSenderId: "571854609274",
  appId: "1:571854609274:web:6ee1e995b299f6b6cf14c3",
  measurementId: "G-5C21CL55TN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignin = async () => {
        setLoading(true);

        await signInWithEmailAndPassword(auth, email.trim(), password).then(() => {
            alert("Acceso Correcto.. Muy bien");
            router.replace("/drawer/splash");
        })
        .catch((err) => {
            alert(err.message);
            alert("Escribiste mal tu contraseña");
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginHeader}>
                <Text style={styles.tituloPolleria}>🍗 RapiPollo</Text>
                <Text style={styles.subtituloPolleria}>¡El mejor pollo a la brasa!</Text>
            </View>

            <View style={styles.loginContainer}>
                <View style={styles.emailContainer}>
                    <Text style={styles.emailText}>Email:</Text>
                    <TextInput
                        placeholder='Coloca tu Correo Electronico'
                        placeholderTextColor="#9CA3AF"
                        style={styles.emailInput}
                        keyboardType='email-address'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>Contraseña:</Text>
                    <TextInput
                        placeholder='Coloca tu Contraseña'
                        placeholderTextColor="#9CA3AF"
                        style={styles.passwordInput}
                        keyboardType='visible-password'
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>

                {/* Olvidar Password */}
                <View style={styles.olvidarContainer}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.olvidar}>Olvidste tu Contraseña</Text>
                    </TouchableOpacity>
                </View>

                {/* Boton Login */}
                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={handleSignin}>
                        <Text style={styles.loginButtonText}>
                            {loading ? "Loading" : "Login"}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* SignUp */}
                <View style={styles.signupGroup}>
                    <TouchableOpacity>
                        <Text style={styles.signup}>
                            SignUp
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
        justifyContent: "center",
        backgroundColor: "#FFF8E7", // Crema cálido
        alignItems: "center",
        paddingHorizontal: 25,
    },
    loginHeader: {
        marginBottom: 25,
        alignItems: "center",
    },
    tituloPolleria: {
        fontSize: 34,
        fontWeight: "bold",
        color: "#C62828", // Rojo brasa
    },
    subtituloPolleria: {
        fontSize: 16,
        color: "#6D4C41", // Marrón tostado
        marginTop: 4,
        fontWeight: "600",
    },
    loginContainer: {
        width: "100%",
        maxWidth: 420,
        backgroundColor: "#FFFFFF",
        padding: 25,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#FFB300", // Borde dorado 
        elevation: 6,
    },
    emailContainer: {
        marginBottom: 20,
    },
    emailInput: {
        width: '100%',
        minHeight: 50,
        backgroundColor: '#FFFDF9',
        borderRadius: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#E0C097',
    },
    passwordContainer: {
    },
    passwordInput: {
        marginTop: 10,
        width: '100%',
        minHeight: 50,
        backgroundColor: '#FFFDF9',
        borderRadius: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#E0C097',
    },
    emailText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#4E342E',
        marginBottom: 8,
    },
    passwordText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#4E342E',
        marginBottom: 8,
    },
    loginButton: {
        marginTop: 22,
        width: "100%",
        height: 52,
        backgroundColor: "#E65100", // Naranja 
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },
    loginButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    olvidarContainer: {
        marginTop: 15,
        alignItems: "flex-end",
    },
    olvidar: {
        color: "#D84315",
        fontWeight: "bold",
        fontSize: 15,
    },
    signupGroup: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    signup: {
        color: "#5D4037",
        fontWeight: "bold",
        fontSize: 16,
    }
});
