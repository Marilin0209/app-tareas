import React, { useState } from "react";

const SistemaEstudiantes = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [curso, setCurso] = useState("");
  const [estudiantes, setEstudiantes] = useState([
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
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      mail.trim() === "" ||
      curso.trim() === ""
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    const nuevoEstudiante = {
      id: estudiantes.length + 1,
      nombre,
      apellido,
      mail,
      curso,
    };

    setEstudiantes([...estudiantes, nuevoEstudiante]);
    setNombre("");
    setApellido("");
    setMail("");
    setCurso("");
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
        {/* FORMULARIO */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "50px",
            marginBottom: "50px",
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
            Agregar Nuevo Estudiante
          </h1>
          <p
            style={{
              color: "#666",
              marginBottom: "40px",
              fontSize: "16px",
            }}
          >
            Completa los datos del estudiante
          </p>

          <form onSubmit={handleSubmit}>
            {/* Nombre y Apellido en fila */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
                marginBottom: "30px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    marginBottom: "10px",
                    fontSize: "15px",
                    color: "#333",
                  }}
                >
                  Nombre <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: Juan"
                  required
                  style={{
                    width: "100%",
                    padding: "15px 20px",
                    fontSize: "16px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "12px",
                    outline: "none",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    marginBottom: "10px",
                    fontSize: "15px",
                    color: "#333",
                  }}
                >
                  Apellido <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ej: Pérez"
                  required
                  style={{
                    width: "100%",
                    padding: "15px 20px",
                    fontSize: "16px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "12px",
                    outline: "none",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontSize: "15px",
                  color: "#333",
                }}
              >
                Correo Electrónico <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="ejemplo@mail.com"
                required
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  fontSize: "16px",
                  border: "2px solid #e0e0e0",
                  borderRadius: "12px",
                  outline: "none",
                  transition: "all 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
                onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              />
            </div>

            {/* Curso */}
            <div style={{ marginBottom: "40px" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontSize: "15px",
                  color: "#333",
                }}
              >
                Curso <span style={{ color: "red" }}>*</span>
              </label>
              <select
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  fontSize: "16px",
                  border: "2px solid #e0e0e0",
                  borderRadius: "12px",
                  outline: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
                onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              >
                <option value="">-- Selecciona un curso --</option>
                <option value="Matemática">Matemática</option>
                <option value="Historia">Historia</option>
                <option value="Ciencia">Ciencia</option>
                <option value="Arte">Arte</option>
              </select>
            </div>

            {/* Botón */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#22c55e",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 4px 15px rgba(34, 197, 94, 0.3)",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#16a34a";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(34, 197, 94, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#22c55e";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(34, 197, 94, 0.3)";
              }}
            >
              💾 Guardar Estudiante
            </button>
          </form>
        </div>

        {/* TABLA */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "50px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#1a1a1a",
            }}
          >
            Lista de Estudiantes
          </h2>
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
      </div>
    </div>
  );
};

export default SistemaEstudiantes;
