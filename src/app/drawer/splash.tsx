import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Splash() {
  useEffect(() => {
    const tiempo = setTimeout(() => {
      router.replace('/drawer/inicio'); // Redirigiendo
    }, 3000);

    return () => clearTimeout(tiempo);
  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>🍗 ¡BIENVENIDO A RAPIPOLLO!</Text>
      <Text style={styles.subtitulo}>El auténtico sabor del pollo a la brasa</Text>
      <ActivityIndicator size="large" color="#E65100" style={styles.indicadorCarga} />
      <Text style={styles.texto}>Ingresando a la página de inicio...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FFF8E7", // Crema cálido 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    borderWidth: 8,
    borderColor: "#FFB300", // Borde dorado 
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#C62828", // Rojo brasa
    fontFamily: 'sans-serif',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitulo: {
    fontSize: 17,
    color: "#5D4037", // Marrón tostado
    marginTop: 12,
    fontWeight: "600",
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  indicadorCarga: {
    marginVertical: 45,
    transform: [{ scale: 1.4 }], 
  },
  texto: {
    fontSize: 15,
    color: "#E65100", // Naranja intenso
    fontWeight: "bold",
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});
