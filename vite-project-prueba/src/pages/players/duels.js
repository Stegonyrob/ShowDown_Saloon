import { players } from './players.js';

// Función para seleccionar jugadores aleatorios para el duelo
function selecPlayersRandom() {
  const player1 = players[Math.floor(Math.random() * players.length)];
  const player2 = players[Math.floor(Math.random() * players.length)];
  return [player1 , player2];
}

// Función para realizar un duelo entre dos jugadores
function initDuels(player1 , player2) {
  // Lógica del duelo
  // ...
  // Retornar el ganador del duelo
  return winner;
}

// Función para manejar las rondas sucesivas
function roundsDuels() {
  while (players.length > 1) {
    const [player1 , player2] = selecPlayersRandom();
    const winner = initDuels(player1 , player2);
    players = players.filter((player) => player !== winner);
  }
}

// Exportar funciones
export { selecPlayersRandom, roundsDuels};
