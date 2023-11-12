// Array inicial de jugadores
let players = [];

// Función para agregar un nuevo jugador
function addPlayers(name, avatar) {
  players.push({ name, avatar });
}

// Función para eliminar un jugador
function deletePlayers(name) {
  players = players.filter((player) => players.name !== name);
}

// Exportar funciones y array de jugadores
export { players, addPlayers, deletePlayers,};
