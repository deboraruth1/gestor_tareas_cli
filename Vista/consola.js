// vista/consola.js

import readline from 'readline';
import gestorTareas from '../Modelo/gestorTareas.js';
import Tarea from '../Modelo/tarea.js';
import EstrategiaUrgencia from '../Estrategias/estrategiaUrgencia.js';
import EstrategiaFecha from '../Estrategias/estrategiaFecha.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log('\n--- Menú de Gestión de Tareas ---');
  console.log('1. Agregar tarea');
  console.log('2. Ver tareas ordenadas');
  console.log('3. Cambiar estrategia de ordenamiento');
  console.log('4. Marcar tarea como completada');
  console.log('5. Salir');
  rl.question('Elegí una opción: ', manejarOpcion);
}

function manejarOpcion(opcion) {
  switch (opcion) {
    case '1':
      agregarTarea();
      break;
    case '2':
      mostrarTareasOrdenadas();
      break;
    case '3':
      cambiarEstrategia();
      break;
    case '4':
      marcarTarea();
      break;
    case '5':
      rl.close();
      break;
    default:
      console.log('Opción inválida');
      mostrarMenu();
  }
}

function agregarTarea() {
  rl.question('Título: ', titulo => {
    rl.question('Descripción: ', descripcion => {
      rl.question('Fecha límite (YYYY-MM-DD): ', fecha => {
        rl.question('Urgencia (1-5): ', urgencia => {
          rl.question('Tipo (trabajo/personal/etc): ', tipo => {
            const nueva = new Tarea(titulo, descripcion, fecha, parseInt(urgencia), tipo);
            gestorTareas.agregarTarea(nueva);
            console.log('✅ Tarea agregada con éxito');
            mostrarMenu();
          });
        });
      });
    });
  });
}

function mostrarTareasOrdenadas() {
  const tareas = gestorTareas.obtenerTareasOrdenadas();
  console.log('\n📋 Tareas:');
  tareas.forEach(t => {
    console.log(`- [${t.completada ? 'X' : ' '}] ${t.titulo} | Urgencia: ${t.urgencia} | Vence: ${t.fechaLimite.toLocaleDateString()}`);
  });
  mostrarMenu();
}

function cambiarEstrategia() {
  console.log('\nEstrategias disponibles:');
  console.log('1. Por urgencia');
  console.log('2. Por fecha límite');
  rl.question('Elegí una estrategia: ', e => {
    if (e === '1') gestorTareas.establecerEstrategia(EstrategiaUrgencia);
    else if (e === '2') gestorTareas.establecerEstrategia(EstrategiaFecha);
    else console.log('⚠️ Estrategia inválida');
    mostrarMenu();
  });
}

function marcarTarea() {
  const tareas = gestorTareas.obtenerTareasOrdenadas();
  tareas.forEach((t, i) => {
    console.log(`${i + 1}. ${t.titulo} [${t.completada ? 'X' : ' '}]`);
  });
  rl.question('Número de tarea a marcar como completada: ', index => {
    const tarea = tareas[parseInt(index) - 1];
    if (tarea) {
      gestorTareas.marcarComoCompletada(tarea.id);
      console.log('✅ Tarea marcada como completada');
    } else {
      console.log('❌ No se encontró la tarea');
    }
    mostrarMenu();
  });
}

mostrarMenu();
