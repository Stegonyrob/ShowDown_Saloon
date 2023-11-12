import { players, addPlayer, deletePlayer } from './players.js';

function addElement() {
  // Your existing code to generate the DOM elements
}

function renderPlayerList() {
  const nameList = document.getElementById('name-list');
  nameList.innerHTML = '';
  players.forEach((player) => {
    const li = document.createElement('li');
    li.textContent = player.name;
    nameList.appendChild(li);
  });
}

document.body.onload = () => {
  addElement();
  renderPlayerList();

  const addButton = document.getElementById('add-name-button');
  addButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;
    addPlayer(name);
    nameInput.value = '';
    renderPlayerList();
  });
};
