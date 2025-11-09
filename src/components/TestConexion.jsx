import { useEffect, useState } from "react";
import { api } from "../services/api";

function TestConexion() {
  const [mensaje, setMensaje] = useState("Conectando con el backend...");

  useEffect(() => {
    api
      .getEstudiantes()
      .then((data) => {
        console.log("✅ Datos del backend:", data);
        setMensaje(
          "Conexión exitosa ✅. Revisá la consola del navegador para ver los datos."
        );
      })
      .catch((err) => {
        console.error("❌ Error al conectar:", err);
        setMensaje("Error al conectar con el backend ❌");
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Prueba de conexión con el backend</h2>
      <p>{mensaje}</p>
    </div>
  );
}

export default TestConexion;
