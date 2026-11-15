import React from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import TarjetaHobby from '../components/TarjetaHobby';
import { Ionicons } from '@expo/vector-icons';

export default function Hobbies() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.headerIcon}>
        <Ionicons name="heart" size={60} color="#e11d48" />
        <Text style={estilos.tituloPrincipal}>Pasatiempos e Intereses</Text>
      </View>

      <TarjetaHobby 
        titulo="Salidas"
        descripcionCorta="Salir y conocer nuevos lugares, explorar lugares nuevos de mi cuidad u otras"
        icono={"gamepad-controller-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", "Me parece una experiencia muy entratenida y enriquesedora el conocer nuevos lugares juntos personas como mi failia o pareja")}
      />

      <TarjetaHobby 
        titulo="Personas queridas"
        descripcionCorta="pasar tiempo con mis amigos y familia"
        icono={"fitness-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", " me gusta pasar tiempo con mis amigos, familia y mi pareja")}
      />

      <TarjetaHobby 
        titulo="Música y Entretenimiento"
        descripcionCorta="Video de gaming, terror, o datos curiosos"
        icono="musical-notes-outline"
        onPress={() => Alert.alert("Detalle de Hobby", "Disfruto de ver contenido variado como gaming, terror o pelis de diversos generons en mi tiempo libre")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f8fafc' },
  contenido: { padding: 20 },
  headerIcon: { alignItems: 'center', marginBottom: 20 },
  tituloPrincipal: { fontSize: 20, fontWeight: 'bold', color: '#1e293b', marginTop: 8 }
});