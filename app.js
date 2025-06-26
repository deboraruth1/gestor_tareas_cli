import gestorTareas from './Modelo/gestorTareas.js';
import EstrategiaUrgencia from './Estrategias/estrategiaUrgencia.js';
import Tarea from './Modelo/tarea.js';

gestorTareas.establecerEstrategia(EstrategiaUrgencia);

// Agregamos algunas tareas de ejemplo
gestorTareas.agregarTarea(new Tarea('Lavar los platos', 'Urgente antes de que se acumulen', '2025-06-26', 4, 'personal'));
gestorTareas.agregarTarea(new Tarea('Preparar presentación', 'Para la reunión del viernes', '2025-06-28', 5, 'trabajo'));
gestorTareas.agregarTarea(new Tarea('Leer documentación', 'Actualizarme con el framework nuevo', '2025-07-01', 2, 'trabajo'));

// Mostramos tareas ordenadas por urgencia
const ordenadas = gestorTareas.obtenerTareasOrdenadas();
console.log('Tareas ordenadas por urgencia:');
ordenadas.forEach(t => {
  console.log(`${t.titulo} (Urgencia: ${t.urgencia})`);
});

