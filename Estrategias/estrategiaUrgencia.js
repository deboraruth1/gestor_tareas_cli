// estrategias/estrategiaUrgencia.js

class EstrategiaUrgencia {
  ordenar(tareas) {
    return [...tareas].sort((a, b) => b.urgencia - a.urgencia);
  }
}

export default new EstrategiaUrgencia();
