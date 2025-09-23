import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Eliminar = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      titulo: "Configurar entorno",
      descripcion: "Instalar dependencias de React",
    },
    {
      id: 2,
      titulo: "Crear componentes",
      descripcion: "Armar menú lateral y AppBar",
    },
    {
      id: 3,
      titulo: "Diseñar mockups",
      descripcion: "Preparar vistas para CRUD",
    },
  ]);

  const handleEliminar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        ❌ Eliminar Tarea
      </Typography>

      {tareas.length === 0 ? (
        <Typography>No hay tareas disponibles.</Typography>
      ) : (
        <List>
          {tareas.map((t) => (
            <ListItem
              key={t.id}
              secondaryAction={
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleEliminar(t.id)}
                >
                  Eliminar
                </Button>
              }
            >
              <ListItemText primary={t.titulo} secondary={t.descripcion} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Eliminar;
