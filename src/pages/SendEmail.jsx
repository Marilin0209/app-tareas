import React, { useState } from "react";
import { Button, TextField, Typography, Paper, Box } from "@mui/material";
import { FaEnvelope } from "react-icons/fa";

export default function SendEmail() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👇 Aquí se va hacer la llamada al backend (API) para que realmente envíe el email
    console.log("Formulario enviado:", formData);

    alert("Tus tareas fueron enviadas por email (simulación).");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 500,
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <FaEnvelope style={{ marginRight: "10px", fontSize: "22px" }} />
        <Typography variant="h6" fontWeight="bold">
          Enviar Tareas por Email
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          label="Asunto"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Enviar
        </Button>
      </form>
    </Paper>
  );
}
