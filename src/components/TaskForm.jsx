import React, { useState } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { FaPlus, FaTasks } from "react-icons/fa";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]); // lista de estudiantes
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle.trim()) {
      setAlertType("error");
      setOpen(true);
      return;
    }

    // Crear nueva tarea
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
    };

    // Agregarla al estado
    setTasks([...tasks, newTask]);

    // Mostrar alerta de éxito
    setAlertType("success");
    setOpen(true);

    // Limpiar inputs
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Título con ícono */}
      <Typography
        variant="h6"
        sx={{ display: "flex", alignItems: "center", mb: 2 }}
      >
        <FaPlus style={{ marginRight: "8px" }} />
        Crear Estudiante
      </Typography>

      {/* Contenedor del formulario: ocupa mitad izquierda */}
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Box sx={{ width: "10%" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Estudiante"
              fullWidth
              margin="normal"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <TextField
              label="Descripción"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Guardar Estudiante
            </Button>
          </form>
        </Box>
      </Box>

      {/* Lista de Estudiantes */}
      <Typography
        variant="subtitle1"
        sx={{ display: "flex", alignItems: "center", mt: 4 }}
      >
        <FaTasks style={{ marginRight: "8px" }} />
        Lista de Estudiantes
      </Typography>

      {tasks.length === 0 ? (
        <Typography variant="body2">No hay Estudiantes todavía.</Typography>
      ) : (
        <Box sx={{ mt: 2 }}>
          {tasks.map((task) => (
            <Card key={task.id} sx={{ mb: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.description || "Sin descripción"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Snackbar de feedback */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ mt: 7 }}
      >
        <Alert
          severity={alertType}
          onClose={() => setOpen(false)}
          sx={{ width: "100%" }}
        >
          {alertType === "success"
            ? "¡Estudiante guardado con éxito!"
            : "Debes completar los datos del estudiante."}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TaskForm;
