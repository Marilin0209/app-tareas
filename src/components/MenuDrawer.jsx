/**
 * MenuDrawer.jsx
 * -----------------------------
 * Componente que implementa un AppBar fijo y un Drawer lateral
 * con opciones de navegación para la aplicación de gestión de tareas.
 *
 * Tecnologías usadas:
 * - Material UI (AppBar, Drawer, List, etc.)
 * - React Icons (para los íconos de cada opción)
 * - React Router (para la navegación con <Link>)
 */

import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  FaCode,
  FaTasks,
  FaPlus,
  FaEdit,
  FaTrash,
  FaStar,
  FaEnvelope,
} from "react-icons/fa";

const drawerWidth = 200; // Ancho del menú lateral
const APPBAR_HEIGHT = 70; // Alto del AppBar (en píxeles)

export default function MenuDrawer() {
  const [open, setOpen] = React.useState(false);

  // Ajusta el paddingTop del body para evitar que el contenido quede oculto por el AppBar fijo
  React.useEffect(() => {
    const previousPaddingTop = document.body.style.paddingTop;
    document.body.style.paddingTop = `${APPBAR_HEIGHT}px`;
    return () => {
      document.body.style.paddingTop = previousPaddingTop;
    };
  }, []);

  // Maneja la apertura y cierre del Drawer
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Contenido del Drawer
  const drawer = (
    <div>
      {/* Cabecera del Drawer */}
      <Toolbar sx={{ minHeight: `${APPBAR_HEIGHT}px` }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#58a6ff",
            fontFamily: "Fira Code, monospace",
          }}
        >
          <FaCode style={{ marginRight: 8 }} />
          DevTrack
        </Typography>
      </Toolbar>

      <Divider />

      {/* Lista de opciones de navegación */}
      <List>
        <ListItem
          button
          component={Link}
          to="/inbox"
          onClick={handleDrawerToggle}
        >
          <FaTasks style={{ marginRight: 10 }} />
          <ListItemText primary="Ver Tareas" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/agregar"
          onClick={handleDrawerToggle}
        >
          <FaPlus style={{ marginRight: 10 }} />
          <ListItemText primary="Agregar Tarea" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/modificar"
          onClick={handleDrawerToggle}
        >
          <FaEdit style={{ marginRight: 10 }} />
          <ListItemText primary="Modificar Tarea" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/eliminar"
          onClick={handleDrawerToggle}
        >
          <FaTrash style={{ marginRight: 10 }} />
          <ListItemText primary="Eliminar Tarea" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/starred"
          onClick={handleDrawerToggle}
        >
          <FaStar style={{ marginRight: 10 }} />
          <ListItemText primary="Tareas Importantes" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/send"
          onClick={handleDrawerToggle}
        >
          <FaEnvelope style={{ marginRight: 10 }} />
          <ListItemText primary="Enviar por Email" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />

      {/* Barra superior fija */}
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          backgroundColor: "#BE1393", // Color morado
        }}
      >
        <Toolbar sx={{ minHeight: `${APPBAR_HEIGHT}px !important` }}>
          {/* Botón de menú para abrir/cerrar el Drawer */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título de la aplicación */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontFamily: "Fira Code, monospace" }}
          >
            Administrador de Tareas
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#F2E7DC",
            color: "#038C7F",
            marginTop: `${APPBAR_HEIGHT}px`, // Comienza debajo del AppBar
          },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
