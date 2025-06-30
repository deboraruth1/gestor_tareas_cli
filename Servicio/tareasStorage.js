// Servicio/tareasStorage.js
const fs = requiere ('fs');
const RUTA_ARCHIVO = './tareas.json';

export function guardarTareas(tareas) {
  const data = JSON.stringify(tareas, null, 2);
  fs.writeFileSync(RUTA_ARCHIVO, data, 'utf-8');
}

export function cargarTareas() {
  if (!fs.existsSync(RUTA_ARCHIVO)) return [];
  const data = fs.readFileSync(RUTA_ARCHIVO, 'utf-8');
  const tareasCrudas = JSON.parse(data);
  return tareasCrudas;
}
