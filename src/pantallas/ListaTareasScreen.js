import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { styles } from '../styles/MyStyles'
import ListaTareas from '../componentes/ListaTareas';
import { AppContext } from '../context/AppContext';

function ListaTareasScreen({ navigation }){

  const {tareas, eliminarCompletas} = useContext(AppContext);

  const eliminarTareasCompletas = () => {
    if(tareas.length > 0){
      Alert.alert(
        'Confirmar acción',
        '¿Desea eliminar las tareas completas?',
        [
        {
          text: 'Aceptar',
          onPress: () => {eliminarCompletas()}
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        }],
        {cancelable: true}
      );
    }
  }

  function cantTareasIncompletas(){
    return tareas.filter(t => !t.completa).length;
  }

  const textoTasks = cantTareasIncompletas() === 1
    ? "1 tarea incompleta"
    : cantTareasIncompletas()+" tareas incompletas";

  return (
       <View style={styles.background}>
        <TouchableOpacity 
            style={styles.segundoButton}
            onPress={eliminarTareasCompletas}
            >
            <Image source={require('../styles/delete_logo.png')} style={{width: 20, height:20, marginTop:15}}/>
        </TouchableOpacity>
        
        <TouchableOpacity
           title='+'
           style={styles.primerButton}
           onPress={() => {navigation.navigate("NuevaTareaScreen", {descripcionIni: '', id: 0})}} >
             
           <Text style={styles.buttonText}>+</Text>    
         </TouchableOpacity>
        
        <View style={styles.titleItem}/>
         <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
           Tareas
         </Text> 

         <Text style={styles.cantTasks}>
          {textoTasks}
         </Text>

          <ScrollView style={styles.scrollView}>
            <ListaTareas navigation={navigation}/>
          </ScrollView>
       </View>
  );
}
  
  export default ListaTareasScreen
  
  
  