// src/pages/DetalleEstudiante.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";
import { Paper, Button } from "@mui/material";

export default function DetalleEstudiante() {
  const { id } = useParams();
  const [est, setEst] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .getEstudiante(id)
      .then((data) => {
        if (mounted) {
          setEst(data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!est) return <p>No encontrado</p>;

  return (
    <Paper sx={{ p: 3 }}>
      <h2>
        {est.nombre} {est.apellido}
      </h2>
      <p>
        <strong>Mail:</strong> {est.mail}
      </p>
      <p>
        <strong>Curso:</strong> {est.curso}
      </p>
      <Button component={Link} to="/">
        Volver
      </Button>
    </Paper>
  );
}
