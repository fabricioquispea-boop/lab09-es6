import { curso, estudiantes } from "./datos.js";
import reporte from "./calculos.js";

// Spread de objeto y de arreglo
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

// Consola
console.log(`Curso: ${curso}`);
todos.forEach(estudiante => console.log(reporte(estudiante)));

// Página
document.querySelector("#curso").textContent = `Curso: ${curso}`;
const lista = document.querySelector("#reportes");
todos.forEach(estudiante => {
  lista.innerHTML += `<li>${reporte(estudiante)}</li>`;
});