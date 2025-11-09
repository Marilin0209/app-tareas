import { useEffect, useState } from "react";
import { api } from "../services/api";

function ListaEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    api.getEstudiantes().then(setEstudiantes).catch(console.error);
  }, []);

  return (
    <ul>
      {estudiantes.map((e) => (
        <li key={e._id}>{e.nombre}</li>
      ))}
    </ul>
  );
}

export default ListaEstudiantes;

/*import { useEffect, useState } from "react";
import { getEstudiantes } from "../services/api"; // este archivo lo vamos a crear también

function ListaEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    getEstudiantes().then(setEstudiantes);
  }, []);

  return (
    <ul>
      {estudiantes.map((e) => (
        <li key={e._id}>{e.nombre}</li>
      ))}
    </ul>
  );
}

export default ListaEstudiantes;
*/
