import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    deleteDoc,
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc
} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATNzAdh4Barx42MMPOkuwof-i1aFmRc7c",
  authDomain: "://firebaseapp.com",
  projectId: "rapipollo-212fe",
  storageBucket: "rapipollo-212fe.firebasestorage.app",
  messagingSenderId: "571854609274",
  appId: "1:571854609274:web:6ee1e995b299f6b6cf14c3",
  measurementId: "G-5C21CL55TN"
};

// inicianisamos el Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default function Crud(){
   const [dni, setDni]=useState<string>("");
  const [name, setName]=useState<string>("");
   const [correo, setCorreo]=useState<string>("");
  const [celular, setCelular]=useState<string>("");
  const [userInfo, setUserInfo]=useState<any | undefined>(null);


  const Create=async()=>{
     
      if (!dni.trim()) {
        console.log("Por favor, escribe un DNI antes de crear.");
        return;
      }
      try {
        await setDoc(doc(db, "employees", dni.trim()),{
              Dni:dni,
              Username:name,
              Correo:correo,
              Celular:celular
        });
        //setDni("");
        setName("");
        setCorreo("");
        setCelular("");
      }catch(error:any){
        console.log("Error al crear Documento", error);
      }
  }

  const Read=async()=>{
    try{
      const docRef = doc(db, "employees", dni.trim()); 
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        console.log("Documento encontrado", docSnap.data());
        setUserInfo(docSnap.data());
        setName(docSnap.data().Username ?? "");
        setCorreo(docSnap.data().Correo ?? "");
        setCelular(docSnap.data().Celular ?? ""); 

      }else{
        console.log("No encontrado");
      }
    }catch(error:any){
      console.log("Error en leer documento", error);
    }
    
  }

  const Update = async () => {
  const id = dni.trim();

  if (!id || !name.trim() || !correo.trim() || !celular.trim()) {
    alert("Por favor, completa todos los campos antes de actualizar.");
    return;
  }

  // Logica
  const datosActualizados = {
    Username: name.trim(),
    Correo: correo.trim(),
    Celular: celular.trim()
  };

  //conectando con el firebase y actualizando el documento 

  try {
    await updateDoc(doc(db, "employees", id), datosActualizados);
    setUserInfo({ Dni: id, ...datosActualizados });
    alert("Usuario actualizado correctamente");
  } catch (error: any) {
    console.log("Error al actualizar", error);
    alert("Error al actualizar el usuario. Por favor, inténtalo de nuevo.");
  }
};

  const Delete=async()=>{
      // Validación: Si el DNI está vacío, no intentamos eliminar nada
      if (!dni.trim()) {
        console.log("Por favor, escribe un DNI para eliminar.");
        return;
      }
      try{
        await deleteDoc(doc(db, "employees", dni.trim()));
        setUserInfo(null);
        setDni("");
      }catch(error:any) {
        console.log("Error al Eliminar",error);
      }
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>CREAR CRUD</Text>
    <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tu DNI'
        maxLength={8}
        style={styles.input}
         keyboardType='numeric'
         onChangeText={(text)=>setDni(text)}
          value={dni}
        >
        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tus Nombres'
        style={styles.input}
          onChangeText={(text)=>setName(text)}
          value={name}
        >
        </TextInput>
      </View>
       <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tu Correo Electronico'
        style={styles.input}
        keyboardType='email-address'
        onChangeText={(text)=>setCorreo(text)}
        value={correo}
        >
        </TextInput>
      </View>
        <View style={styles.inputContainer}>
        <TextInput
        placeholder='Coloca tu Celular'
        maxLength={9}
        style={styles.input}
        keyboardType='number-pad'
        onChangeText={(text)=>setCelular(text)}
        value={celular}
        >
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={Create}>
            <Text style={{color:'white'}}>CREATE</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={Read}>
            <Text style={{color:'white'}}>READ</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={Update}>
            <Text style={{color:'white'}}>UPDATE</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={Delete}>
            <Text style={{color:'white'}}>DELETE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.datosContainer}>
             <Text style={{color:'white', fontSize:30}}>{userInfo?.Dni} </Text>
            <Text style={{color:'white', fontSize:30}}>{userInfo?.Username} </Text>
            <Text style={{color:'white', fontSize:30}}>{userInfo?.Correo} </Text>
            <Text style={{color:'white', fontSize:30}}>{userInfo?.Celular} </Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'darkblue',
    padding:10,
  },
  titulo:{
    textAlign:'center',
    fontSize:28,
    color:'white',
  },
  inputContainer:{
    marginTop:20,
  },
  input:{
    backgroundColor:'white',
    borderRadius:5,
    paddingHorizontal:20,
    paddingVertical:20,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:50,
  },
  button:{
    backgroundColor:'red',
    padding:20,
    borderRadius:20,
  },
  datosContainer:{

  }
  
});
