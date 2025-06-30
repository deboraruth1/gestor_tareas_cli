// vista/consola.js

const readline= requiere('readline');
const gestorTareas =requiere( '../Modelo/gestorTareas.js')
const Tarea =requiere( '../Modelo/tarea.js' )
const EstrategiaUrgencia =requiere( '../Estrategias/estrategiaUrgencia.js');
const EstrategiaFecha =requiere( '../Estrategias/estrategiaFecha.js');

const { esFechaValida, esNumeroValido, noVacio } = require('../Utilidades/validarEntrada');

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

//const { esFechaValida, esNumeroValido, noVacio } =requiere( '../Utilidades/validarEntrada.js' );

function agregarTarea() {
  rl.question('Título: ', titulo => {
    if (!noVacio(titulo)) return errorYReintentar('Título inválido');

    rl.question('Descripción: ', descripcion => {
      if (!noVacio(descripcion)) return errorYReintentar('Descripción inválida');

      rl.question('Fecha límite (YYYY-MM-DD): ', fecha => {
        if (!esFechaValida(fecha)) return errorYReintentar('Fecha inválida');

        rl.question('Urgencia (1-5): ', urgencia => {
          if (!esNumeroValido(urgencia, 1, 5)) return errorYReintentar('Urgencia fuera de rango');

          rl.question('Tipo (trabajo/personal): ', tipo => {
            if (!noVacio(tipo)) return errorYReintentar('Tipo inválido');

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

function errorYReintentar(mensaje) {
  console.log(`❌ ${mensaje}. Por favor, intentá de nuevo.`);
  mostrarMenu();
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

  if (tareas.length === 0) {
    console.log('⚠️ No hay tareas cargadas.');
    return mostrarMenu();
  }

  tareas.forEach((t, i) => {
    console.log(`${i + 1}. ${t.titulo} [${t.completada ? '✔' : ' '}]`);
  });

  rl.question('Número de tarea a marcar como completada: ', input => {
    const index = parseInt(input);
    const tarea = tareas[index - 1];

    if (isNaN(index) || index < 1 || index > tareas.length) {
      console.log('❌ Número inválido.');
    } else if (tarea.completada) {
      console.log('🔁 Esa tarea ya estaba marcada como completada.');
    } else {
      gestorTareas.marcarComoCompletada(tarea.id);
      console.log('✅ Tarea marcada como completada.');
    }

    mostrarMenu();
  });
}


mostrarMenu();
