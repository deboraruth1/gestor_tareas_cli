// Utilidades/validarEntrada.js

function esFechaValida(fechaString) {
  const fecha = new Date(fechaString);
  return fecha instanceof Date && !isNaN(fecha);
}

function esNumeroValido(valor, min, max) {
  const numero = parseInt(valor);
  return !isNaN(numero) && numero >= min && numero <= max;
}

function noVacio(texto) {
  return typeof texto === 'string' && texto.trim().length > 0;
}

module.exports = {
  esFechaValida,
  esNumeroValido,
  noVacio
};
