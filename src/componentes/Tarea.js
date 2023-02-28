import React, { useContext }from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

function Tarea({id, descripcion, completa, navigation}){
    const {cambiarCompleta} = useContext(AppContext);

    const simbolo = completa
        ? <Text style={styles.simboloCompleto}>{'\u2713'}</Text>
        : <Text style={styles.simboloIncompleto}>{'\u2500'}</Text>
    
    const textStyle = completa
        ? styles.textoCompleta
        : styles.textoIncompleta;
    
    return (
           <>
            <View style={{borderBottomWidth: 1, borderBottomColor:'lightgray', marginHorizontal: 40}}/>

            <View style={{marginTop: 10, marginBottom: 10, marginHorizontal: 40, flexDirection: 'row', alignItems: 'center'}}>
               <TouchableOpacity onPress={() => {cambiarCompleta(id)}}>
                    {simbolo}
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("NuevaTareaScreen", {descripcionIni: descripcion, id: id})}>
                    <Text style={textStyle}>{descripcion}</Text> 
               </TouchableOpacity>
           </View>
           </>
    );
}

export const styles = StyleSheet.create({
    simboloCompleto:{
        color: 'lightgray',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'relative',
    },

    simboloIncompleto: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'relative',
        marginRight: 3
    },
   
    textoCompleta:{
        color: 'lightgray',
        fontSize: 15,
        position: 'relative',
        left: 10,
    },

    textoIncompleta:{
        color: 'black',
        fontSize: 15,
        position: 'relative',
        left: 10,
    }
});

export default Tarea