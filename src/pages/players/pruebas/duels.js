

   
// Función para seleccionar jugadores aleatorios para el duelo
function selecPlayersRandom(players) {
    const players =  [
  
    { id: 'cow-1', src: 'monst_1_cow.svg', name: 'Daniel' },
    { id: 'cow-2', src: 'monst_2_cow.svg', name: 'Alicia' },
    { id: 'cow-3', src: 'monst_3_cow.svg', name: 'Juan' },
    { id: 'cow-4', src: 'monst_4_cow.svg', name: 'Brusmel' },
    { id: 'cow-5', src: 'monst_5_cow.svg', name: 'Vero' },
    { id: 'cow-6', src: 'monst_6_cow.svg', name: 'Nico' },
    { id: 'cow-7', src: 'monst_7_cow.svg', name: 'David' },
    { id: 'cow-8', src: 'monst_8_cow.svg', name: 'Matilde' },
    { id: 'cow-9', src: 'monst_9_cow.svg', name: 'Luis' },
    { id: 'cow-10', src: 'monst_10_cow.svg', name: 'Mark' },
    { id: 'cow-11', src: 'monst_11_cow.svg', name: 'Stella' },
    { id: 'cow-12', src: 'monst_12_cow.svg', name: 'Erika' },
  
    { id: 'ind-1', src: 'monst_1_ind.svg', name: 'Ana' },
    { id: 'ind-2', src: 'monst_2_ind.svg', name: 'Borja' },
    { id: 'ind-3', src: 'monst_3_ind.svg', name: 'Andrea' },
    { id: 'ind-4', src: 'monst_4_ind.svg', name: 'Stiven' },
    { id: 'ind-5', src: 'monst_5_ind.svg', name: 'Sara'},
    { id: 'ind-6', src: 'monst_6_ind.svg', name: 'Romina' },
    { id: 'ind-7', src: 'monst_7_ind.svg', name: 'Katherine' },
    { id: 'ind-8', src: 'monst_8_ind.svg', name: 'Eva' },
    { id: 'ind-9', src: 'monst_9_ind.svg', name: 'Rebeca' },
    
    { id: 'ind-11', src: 'monst_11_ind.svg', name: 'Natalia' } , 
 

]
 const player1 = players[Math.floor(Math.random() * players.length)];
 const player2 = players[Math.floor(Math.random() * players.length)];
 
 return [player1 , player2];
}


// Exportar funciones
export { selecPlayersRandom};
