/*import React from "react";

const Inbox = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>📌 Lista de Estudiantes</h2>
      <p> </p>
    </div>
  );
};

export default Inbox; */

import React, { useState, useEffect } from "react";

const Inbox = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    cargarEstudiantes();

    // Actualizar cada segundo para reflejar cambios
    const interval = setInterval(() => {
      cargarEstudiantes();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cargarEstudiantes = () => {
    const estudiantesGuardados = localStorage.getItem("estudiantes");
    if (estudiantesGuardados) {
      setEstudiantes(JSON.parse(estudiantesGuardados));
    } else {
      setEstudiantes([]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "50px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#1a1a1a",
            }}
          >
            📋 Lista de Estudiantes
          </h1>
          <p
            style={{
              color: "#666",
              marginBottom: "40px",
              fontSize: "16px",
            }}
          >
            Total: {estudiantes.length} estudiante
            {estudiantes.length !== 1 ? "s" : ""}
          </p>

          {estudiantes.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#999",
              }}
            >
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>📚</div>
              <p style={{ fontSize: "18px" }}>No hay estudiantes registrados</p>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                Ve a "Agregar Estudiante" para añadir el primero
              </p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "2px solid #e0e0e0",
                      backgroundColor: "#f8f9fa",
                    }}
                  >
                    <th
                      style={{
                        padding: "20px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Nombre
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Apellido
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Correo
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Curso
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {estudiantes.map((estudiante, index) => (
                    <tr
                      key={estudiante.id}
                      style={{
                        borderBottom: "1px solid #f0f0f0",
                        backgroundColor: index % 2 === 0 ? "white" : "#fafafa",
                        transition: "background-color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f0fdf4")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          index % 2 === 0 ? "white" : "#fafafa")
                      }
                    >
                      <td
                        style={{
                          padding: "20px",
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#1a1a1a",
                        }}
                      >
                        {estudiante.nombre}
                      </td>
                      <td
                        style={{
                          padding: "20px",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        {estudiante.apellido}
                      </td>
                      <td
                        style={{
                          padding: "20px",
                          fontSize: "16px",
                          color: "#666",
                        }}
                      >
                        {estudiante.mail}
                      </td>
                      <td style={{ padding: "20px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "8px 16px",
                            backgroundColor: "#dbeafe",
                            color: "#1e40af",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          {estudiante.curso}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Resumen por Curso */}
        {estudiantes.length > 0 && (
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "25px",
                color: "#1a1a1a",
              }}
            >
              📊 Estudiantes por Curso
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {Array.from(new Set(estudiantes.map((e) => e.curso)))
                .sort()
                .map((curso, idx) => {
                  const cantidad = estudiantes.filter(
                    (e) => e.curso === curso
                  ).length;
                  return (
                    <div
                      key={idx}
                      style={{
                        padding: "25px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "15px",
                        textAlign: "center",
                        border: "2px solid #e0e0e0",
                        transition: "all 0.3s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 20px rgba(0,0,0,0.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                        📚
                      </div>
                      <h3
                        style={{
                          fontSize: "28px",
                          fontWeight: "bold",
                          color: "#1a1a1a",
                          marginBottom: "8px",
                        }}
                      >
                        {cantidad}
                      </h3>
                      <p
                        style={{
                          color: "#666",
                          margin: 0,
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        {curso}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
