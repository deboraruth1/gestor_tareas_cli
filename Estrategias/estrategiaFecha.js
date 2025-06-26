// estrategias/estrategiaFecha.js

class EstrategiaFecha {
  ordenar(tareas) {
    return [...tareas].sort((a, b) => a.fechaLimite - b.fechaLimite);
  }
}

export default new EstrategiaFecha();
