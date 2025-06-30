// modelo/gestorTareas.js
const { guardarTareas, cargarTareas } =requiere ( '../Servicio/tareasStorage.js');    
const Tarea =requiere ( './tarea.js');

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

module.exports= new GestorTareas(); // Exportamos la instancia única
