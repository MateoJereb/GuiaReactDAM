import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import Tarea from './Tarea';

function ListaTareas({navigation}) {
  
  const {tareas, cambiarCompleta} = useContext(AppContext);

  return (
    <View style={styles.container}>
      {tareas.map((tarea) => (
        <Tarea 
          key = {tarea.id} 
          id={tarea.id} 
          descripcion={tarea.descripcion}
          completa={tarea.completa}
          navigation={navigation}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ListaTareas;
