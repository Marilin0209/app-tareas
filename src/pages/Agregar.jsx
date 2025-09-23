import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

const Agregar = () => {
  const [nombre, setNombre] = useState("");
  const [fechatarea, setFechatarea] = useState("");
  const [estado, setEstado] = useState("sin comenzar"); // 👈 valor por defecto
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || fechatarea.trim() === "") return;

    const nuevaTarea = {
      id: tareas.length + 1,
      nombre,
      fechatarea,
      estado,
    };

    setTareas([...tareas, nuevaTarea]);
    setNombre("");
    setFechatarea("");
    setEstado("sin comenzar"); // volver al valor inicial
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        ➕ Agregar Nueva Tarea
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre de la tarea"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          label="Fecha de tarea"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={fechatarea}
          onChange={(e) => setFechatarea(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          select
          label="Estado"
          variant="outlined"
          fullWidth
          margin="normal"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <MenuItem value="sin comenzar">Sin comenzar</MenuItem>
          <MenuItem value="en proceso">En proceso</MenuItem>
          <MenuItem value="finalizado">Finalizado</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Guardar Tarea
        </Button>
      </form>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">📋 Lista de tareas</Typography>
        {tareas.length === 0 ? (
          <Typography>No hay tareas todavía.</Typography>
        ) : (
          <ul>
            {tareas.map((tarea) => (
              <li key={tarea.id}>
                <strong>{tarea.nombre}</strong> <br />
                <small>📅 {tarea.fechatarea}</small> <br />
                <small>📌 Estado: {tarea.estado}</small>
              </li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
};

export default Agregar;
