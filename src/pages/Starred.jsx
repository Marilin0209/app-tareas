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
  const [tareas, setTareas] = useState([
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

  const marcarImportante = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, importante: !t.importante } : t))
    );
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        ⭐ Tareas Importantes
      </Typography>

      <List>
        {tareas.map((t) => (
          <ListItem
            key={t.id}
            secondaryAction={
              <Button
                variant="outlined"
                color={t.importante ? "warning" : "primary"}
                onClick={() => marcarImportante(t.id)}
              >
                {t.importante ? "Quitar" : "Marcar"}
              </Button>
            }
          >
            <ListItemText
              primary={t.titulo}
              secondary={`${t.descripcion} ${
                t.importante ? "⭐ IMPORTANTE" : ""
              }`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Starred;
