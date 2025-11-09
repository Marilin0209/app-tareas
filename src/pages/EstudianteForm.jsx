// src/pages/EstudianteForm.jsx
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EstudiantesContext } from "../context/EstudiantesContext";
import { api } from "../services/api";
import { TextField, Button, Paper } from "@mui/material";

export default function EstudianteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { crear, editar } = useContext(EstudiantesContext);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    curso: "",
  });

  useEffect(() => {
    if (id) {
      api.getEstudiante(id).then((d) => setForm(d || {}));
    }
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await editar(id, form);
      } else {
        await crear(form);
      }
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <h2>{id ? "Editar Estudiante" : "Nuevo Estudiante"}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nombre"
          label="Nombre"
          value={form.nombre}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          name="apellido"
          label="Apellido"
          value={form.apellido}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          name="mail"
          label="Mail"
          value={form.mail}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          name="curso"
          label="Curso"
          value={form.curso}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">
          {id ? "Guardar" : "Crear"}
        </Button>
      </form>
    </Paper>
  );
}
