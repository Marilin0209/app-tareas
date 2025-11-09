import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const Starred = () => {
  const [estudiantes, setEstudiantes] = useState([
    {
      id: 1,
      titulo: "Configurar entorno",
      descripcion: "Instalar dependencias",
      importante: false,
    },
    {
      id: 2,
      titulo: "Crear componentes",
      descripcion: "Armar menú lateral",
      importante: true,
    },
    {
      id: 3,
      titulo: "Diseñar mockups",
      descripcion: "Preparar vistas de CRUD",
      importante: false,
    },
  ]);
};

export default Starred;
