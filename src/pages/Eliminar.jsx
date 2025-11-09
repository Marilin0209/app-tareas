import React, { useState, useEffect } from "react";

const Eliminar = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = () => {
    const estudiantesGuardados = localStorage.getItem("estudiantes");
    if (estudiantesGuardados) {
      setEstudiantes(JSON.parse(estudiantesGuardados));
    } else {
      const datosIniciales = [
        {
          id: 1,
          nombre: "Juan",
          apellido: "Pérez",
          mail: "juan.perez@email.com",
          curso: "Matemática",
        },
        {
          id: 2,
          nombre: "María",
          apellido: "González",
          mail: "maria.gonzalez@email.com",
          curso: "Historia",
        },
      ];
      setEstudiantes(datosIniciales);
      localStorage.setItem("estudiantes", JSON.stringify(datosIniciales));
    }
  };

  const handleEliminar = (id) => {
    const estudiante = estudiantes.find((est) => est.id === id);

    if (
      window.confirm(
        `¿Estás seguro de eliminar a ${estudiante.nombre} ${estudiante.apellido}?`
      )
    ) {
      const estudiantesActualizados = estudiantes.filter(
        (est) => est.id !== id
      );
      setEstudiantes(estudiantesActualizados);
      localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantesActualizados)
      );
      alert("✅ Estudiante eliminado exitosamente");
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
            🗑️ Eliminar Estudiante
          </h1>
          <p
            style={{
              color: "#666",
              marginBottom: "40px",
              fontSize: "16px",
            }}
          >
            Selecciona el estudiante que deseas eliminar
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
                    <th
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Acción
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
                        (e.currentTarget.style.backgroundColor = "#fff5f5")
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
                      <td style={{ padding: "20px", textAlign: "center" }}>
                        <button
                          onClick={() => handleEliminar(estudiante.id)}
                          style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "white",
                            backgroundColor: "#ef4444",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            boxShadow: "0 2px 8px rgba(239, 68, 68, 0.3)",
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#dc2626";
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow =
                              "0 4px 12px rgba(239, 68, 68, 0.4)";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#ef4444";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow =
                              "0 2px 8px rgba(239, 68, 68, 0.3)";
                          }}
                        >
                          🗑️ Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {estudiantes.length > 0 && (
            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                backgroundColor: "#fef2f2",
                borderRadius: "12px",
                border: "1px solid #fecaca",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#991b1b",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "20px" }}>⚠️</span>
                <strong>Advertencia:</strong> La eliminación de estudiantes es
                permanente y no se puede deshacer.
              </p>
            </div>
          )}
        </div>

        {/* Estadísticas */}
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>👥</div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#1a1a1a",
                margin: "10px 0",
              }}
            >
              {estudiantes.length}
            </h3>
            <p style={{ color: "#666", margin: 0 }}>Estudiantes Activos</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>📚</div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#1a1a1a",
                margin: "10px 0",
              }}
            >
              {new Set(estudiantes.map((e) => e.curso)).size}
            </h3>
            <p style={{ color: "#666", margin: 0 }}>Cursos Diferentes</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>📧</div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#1a1a1a",
                margin: "10px 0",
              }}
            >
              {estudiantes.filter((e) => e.mail).length}
            </h3>
            <p style={{ color: "#666", margin: 0 }}>Con Email Registrado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eliminar;
