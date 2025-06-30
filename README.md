# 🗂️ Gestor de Tareas - Proyecto de Consola en Node.js

Una aplicación interactiva de consola para gestionar tareas con priorización inteligente, escrita con JavaScript (Node.js). Implementa patrones de diseño como Strategy y Singleton, arquitectura clara (MVC), y almacenamiento persistente en archivo JSON.

---

## 🚀 Funcionalidades principales

- Agregar, editar y eliminar tareas.
- Priorizar tareas automáticamente según **urgencia** o **fecha límite**.
- Marcar tareas como completadas.
- Interfaz interactiva por consola (menú).
- Almacenamiento persistente con archivo `tareas.json`.

---

## 🏗️ Tecnologías y conceptos aplicados

- Node.js y CommonJS (`require`)
- Patrón **Singleton** para el gestor de tareas.
- Patrón **Strategy** para priorización configurable.
- Arquitectura tipo **MVC** (Modelo - Vista - Controlador).
- Manejo de entrada de usuario con `readline`.
- Persistencia de datos con el módulo `fs`.

---

## 📂 Estructura del proyecto
/TAREAS_APP/
 ├── modelo/ 
 │ ├── tarea.js 
 │ └── gestorTareas.js 
 ├── estrategias/ 
 │ ├── estrategiaUrgencia.js 
 │ └── estrategiaFecha.js 
 ├── vista/ │ └── consola.js 
 ├── servicio/ 
 │ └── tareasStorage.js 
 ├── tareas.json 
 ├── .gitignore 
 └── README.md

---

## 💻 Cómo ejecutar

1. Cloná el proyecto:
   ```bash
   git clone https://github.com/tu-usuario/tareas-app.git
   cd tareas-app

2. Instalá Node.js si no lo tenés: https://nodejs.org/

3. Ejecutá desde consola:

node vista/consola.js

📦 Instalación opcional de dependencias (para mejoras futuras)
Si decidís incorporar colores o estilos en consola:

bash
npm init -y
npm install chalk


✨ Próximas mejoras
Validaciones más robustas.

Exportar tareas por rango de fechas.

Interfaz web simple con HTML/JS.

Tests automáticos con Jest.

👩‍💻 Autoría
Desarrollado por Débora como proyecto de práctica enfocado en algoritmos, arquitectura, y patrones de diseño.

Podés seguir su evolución profesional en GitHub (reemplazar con tu usuario real).