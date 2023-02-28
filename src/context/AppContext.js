import React, { createContext, useState, useEffect } from "react";
import { actualizarLista, recuperarLista } from "../persistencia/Storage";

const AppContext = createContext();

function AppProvider({ children }) {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        recuperarLista(setTareas);
    }, []);

    useEffect(() => {
        actualizarLista(tareas);
    }, [tareas]);

    const agregarTarea = (nuevaDescrip) =>{
        nuevaTarea = {id: tareas.length+1, descripcion: nuevaDescrip, completa:false}
        setTareas([...tareas, nuevaTarea]);   
    };

    const editarTarea = (id, nuevaDescrip) => {
        setTareas(
            tareas.map((t) => t.id === id ? {...t, descripcion: nuevaDescrip} : t)
        )
    };

    const cambiarCompleta = (id) => {
        setTareas(
            tareas.map((t) => t.id === id ? {...t, completa: !t.completa} : t)
        )
    };

    const eliminarCompletas = () => {
        if(tareas.length > 0){
            setTareas(
                tareas.filter((t) => t.completa === false)
            )
        }
    };

    return (
        <AppContext.Provider value={{tareas, agregarTarea, editarTarea, cambiarCompleta, eliminarCompletas}}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider};