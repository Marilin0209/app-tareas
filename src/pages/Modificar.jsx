import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";

const Modificar = () => {
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
  ]);

  const [tareaSeleccionada, setTareaSeleccionada] = useState("");
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");

  const handleModificar = (e) => {
    e.preventDefault();

    setTareas(
      tareas.map((t) =>
        t.id === tareaSeleccionada
          ? { ...t, titulo: nuevoTitulo, descripcion: nuevaDescripcion }
          : t
      )
    );

    setTareaSeleccionada("");
    setNuevoTitulo("");
    setNuevaDescripcion("");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        ✏️ Modificar Tarea
      </Typography>

      <form onSubmit={handleModificar}>
        <Select
          value={tareaSeleccionada}
          onChange={(e) => setTareaSeleccionada(e.target.value)}
          displayEmpty
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="">Selecciona una tarea</MenuItem>
          {tareas.map((t) => (
            <MenuItem key={t.id} value={t.id}>
              {t.titulo}
            </MenuItem>
          ))}
        </Select>

        <TextField
          label="Nuevo título"
          fullWidth
          margin="normal"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <TextField
          label="Nueva descripción"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary">
          Guardar Cambios
        </Button>
      </form>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">📋 Vista previa de tareas</Typography>
        <ul>
          {tareas.map((t) => (
            <li key={t.id}>
              <strong>{t.titulo}</strong> - {t.descripcion}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Modificar;
