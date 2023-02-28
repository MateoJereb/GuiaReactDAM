import React, { useState, useContext, useEf, useEffect } from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/MyStyles';
import { AppContext } from '../context/AppContext';

function NuevaTareaScreen({navigation, route}){

  const { descripcionIni, id }= route.params;

  const [descripcion, setDescripcion] = useState(descripcionIni);
  const {agregarTarea, editarTarea} = useContext(AppContext);

  return(
        <View style={styles.background}>
           <TouchableOpacity
            style={styles.primerButton}
            onPress={ () => {

              if(descripcion.length > 0){
                if(descripcionIni.length == 0){
                  agregarTarea(descripcion);
                }
                else{
                  editarTarea(id,descripcion);
                }
              }
              
              navigation.goBack();}
              }>

            <Image source={require('../styles/check_logo.png')} style={{width: 13, height:13, marginTop:15}}/>
          </TouchableOpacity>
          
          <View style={styles.titleItem}/>
          <TextInput
            style={styles.nuevaTarea}
            placeholder={descripcionIni.length == 0 ? 'Nueva tarea...' : 'Editar tarea...'}
            value={descripcion}
            onChangeText={texto => setDescripcion(texto)}
            height="auto"
          />
        </View>
    );
}


export default NuevaTareaScreen