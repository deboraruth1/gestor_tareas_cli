// modelo/gestorTareas.js
import { guardarTareas, cargarTareas } from '../Servicio/tareasStorage.js';
import Tarea from './tarea.js';

class GestorTareas {
  constructor() {
    if (GestorTareas.instancia) return GestorTareas.instancia;
    this.tareas = cargarTareas().map(t => new Tarea(
      t.titulo, t.descripcion, t.fechaLimite, t.urgencia, t.tipo, t.id, t.completada
    ));
    this.estrategiaPrioridad = null;
    GestorTareas.instancia = this;
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
    guardarTareas(this.tareas);
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    guardarTareas(this.tareas);
  }

  marcarComoCompletada(id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.marcarComoCompletada();
      guardarTareas(this.tareas);
    }
  }

  // ... resto igual

  establecerEstrategia(estrategia) {
    this.estrategiaPrioridad = estrategia;
  }

  obtenerTareasOrdenadas() {
    if (!this.estrategiaPrioridad) return this.tareas;
    return this.estrategiaPrioridad.ordenar(this.tareas);
  }
}

export default new GestorTareas(); // Exportamos la instancia única
