// src/context/EstudiantesContext.jsx
import React, { createContext, useState } from "react";
import useEstudiantes from "../hooks/useEstudiantes";

export const EstudiantesContext = createContext();

export const EstudiantesProvider = ({ children }) => {
  // tu estado local original
  const [estudiantes, setEstudiantes] = useState([]);

  // hook completo (trae datos del backend y funciones CRUD)
  const {
    estudiantes: estudiantesAPI,
    loading,
    error,
    fetchAll,
    crear,
    editar,
    eliminar,
  } = useEstudiantes();

  // sincroniza tu estado local con el del hook
  React.useEffect(() => {
    if (estudiantesAPI && estudiantesAPI.length) {
      setEstudiantes(estudiantesAPI);
    }
  }, [estudiantesAPI]);

  return (
    <EstudiantesContext.Provider
      value={{
        estudiantes,
        setEstudiantes,
        loading,
        error,
        fetchAll,
        crear,
        editar,
        eliminar,
      }}
    >
      {children}
    </EstudiantesContext.Provider>
  );
};
