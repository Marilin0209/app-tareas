/**
 * App.jsx
 * -----------------------------
 * Punto de entrada principal de la aplicación React.
 * Configura:
 * - Tema global de Material UI
 * - Normalización de estilos con CssBaseline
 * - Navegación de rutas con React Router
 * - Menú lateral (MenuDrawer)
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Componentes propios
import MenuDrawer from "./components/MenuDrawer";

// Páginas
import Inbox from "./pages/Inbox";
import Agregar from "./pages/Agregar";
import Modificar from "./pages/Modificar";
import Eliminar from "./pages/Eliminar";
import Starred from "./pages/Starred";
// import TaskForm from "./pages/TaskForm"; // ⚠️ Duplicado con "Agregar"

/**
 * 🎨 Tema global de la aplicación.
 * Se definen colores primarios y el contraste de texto.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#BE1393", // Color personalizado (morado)
      contrastText: "#fff", // Texto blanco sobre el color primario
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Normaliza los estilos base */}
      <CssBaseline />

      <Router>
        {/* Menú lateral con AppBar */}
        <MenuDrawer />

        {/* Definición de rutas de la aplicación */}
        <Routes>
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/modificar" element={<Modificar />} />
          <Route path="/eliminar" element={<Eliminar />} />
          <Route path="/starred" element={<Starred />} />

          {/* Página por defecto */}
          <Route path="*" element={<Inbox />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
