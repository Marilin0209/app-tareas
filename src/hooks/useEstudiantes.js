import { useState, useEffect } from "react";

/**
 * Custom Hook para manejar estudiantes conectados al backend.
 */

export default function useEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔧 URL de tu API desplegada
  const API_URL = "https://trabajointegrador-marilin-rojas.vercel.app/";

  // Obtener todos los estudiantes
  const fetchEstudiantes = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener los estudiantes");
      const data = await res.json();
      setEstudiantes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Agregar un nuevo estudiante
  const agregarEstudiante = async (nuevoEstudiante) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoEstudiante),
      });
      if (!res.ok) throw new Error("Error al agregar el estudiante");
      const data = await res.json();
      setEstudiantes((prev) => [...prev, data]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Modificar estudiante existente
  const modificarEstudiante = async (id, datosActualizados) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosActualizados),
      });
      if (!res.ok) throw new Error("Error al modificar el estudiante");
      const data = await res.json();
      setEstudiantes((prev) => prev.map((est) => (est.id === id ? data : est)));
    } catch (err) {
      setError(err.message);
    }
  };

  // Eliminar estudiante
  const eliminarEstudiante = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error al eliminar el estudiante");
      setEstudiantes((prev) => prev.filter((est) => est.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Cargar estudiantes al montar
  useEffect(() => {
    fetchEstudiantes();
  }, []);

  return {
    estudiantes,
    loading,
    error,
    fetchEstudiantes,
    agregarEstudiante,
    modificarEstudiante,
    eliminarEstudiante,
  };
}
