import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function actualizarLista(listaTareas) {
    try{
        await AsyncStorage.setItem('listaTareas', JSON.stringify(listaTareas))
    }catch (error){
        console.error("Error al guardar las tareas", error);
    }
};

async function recuperarLista(setTareas) {
    try{
        const listaTareasString = await AsyncStorage.getItem('listaTareas');
        const listaTareas = listaTareasString ? JSON.parse(listaTareasString) : [];
        setTareas(listaTareas);

    }catch (error){
        console.error("Error al recupearar las tareas",error);
    }
};

export { actualizarLista, recuperarLista }