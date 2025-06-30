// modelo/tarea.js

class Tarea {
  constructor(titulo, descripcion, fechaLimite, urgencia, tipo, id = null, completada = false) {
    this.id = id || Date.now(); // Si se pasa un ID, úsalo; si no, generá uno nuevo
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = new Date(fechaLimite); // Convierte el string en Date
    this.urgencia = urgencia;
    this.tipo = tipo;
    this.completada = completada;
  }

  marcarComoCompletada() {
    this.completada = true;
  }
}

module.exports= Tarea;

