// src/services/api.js
const BASE =
  import.meta.env.VITE_API_URL ||
  "https://trabajointegrador-marilin-rojas.vercel.app";

async function request(path, options = {}) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json().catch(() => null);
}

export const api = {
  getEstudiantes: () => request("/api/estudiantes"),
  getEstudiante: (id) => request(`/api/estudiantes/${id}`),
  crearEstudiante: (data) =>
    request("/api/estudiantes", { method: "POST", body: JSON.stringify(data) }),
  editarEstudiante: (id, data) =>
    request(`/api/estudiantes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  eliminarEstudiante: (id) =>
    request(`/api/estudiantes/${id}`, { method: "DELETE" }),
};

/*// src/services/api.js
// URL del backend (tu API Node en Vercel)
const BASE =
  import.meta.env.VITE_API_URL ||
  "https://trabajointegrador-marilin-rojas-rn2vw94z3.vercel.app//";

// función genérica para hacer peticiones
async function request(path, options = {}) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json().catch(() => null);
}

// exportar funciones específicas
export const api = {
  getEstudiantes: () => request("/api/estudiantes"),
  getEstudiante: (id) => request(`/api/estudiantes/${id}`),
  crearEstudiante: (data) =>
    request("/api/estudiantes", { method: "POST", body: JSON.stringify(data) }),
  editarEstudiante: (id, data) =>
    request(`/api/estudiantes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  eliminarEstudiante: (id) =>
    request(`/api/estudiantes/${id}`, { method: "DELETE" }),
};

/*
// src/services/api.js
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://tu-api.vercel.app";

export async function getEstudiantes() {
  const response = await fetch(`${BASE_URL}/api/estudiantes`);
  const data = await response.json();
  return data;
}

const BASE =
  import.meta.env.VITE_API_URL ||
  "https://trabajointegrador-marilin-rojas.vercel.app/";

async function request(path, options = {}) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json().catch(() => null);
}

export const api = {
  getEstudiantes: () => request("/api/estudiantes"),
  getEstudiante: (id) => request(`/api/estudiantes/${id}`),
  crearEstudiante: (data) =>
    request("/api/estudiantes", { method: "POST", body: JSON.stringify(data) }),
  editarEstudiante: (id, data) =>
    request(`/api/estudiantes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  eliminarEstudiante: (id) =>
    request(`/api/estudiantes/${id}`, { method: "DELETE" }),
};
*/
