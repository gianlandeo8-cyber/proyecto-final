import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'skyblue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* Cargando el splash */}
      <Drawer.Screen
        name="splash"
        options={{
          headerShown: false,
          drawerItemStyle: { display: 'none' }, //Ocultando el splash
        }}
      />

    
      <Drawer.Screen
        name="inicio"
        options={{
          drawerLabel: 'Inicio',
          title: 'INICIO',
        }}
      />

      
      <Drawer.Screen
        name="crud"
        options={{
          drawerLabel: 'Crud',
          title: 'CRUD',
        }}
      />
    </Drawer>
  );
}
