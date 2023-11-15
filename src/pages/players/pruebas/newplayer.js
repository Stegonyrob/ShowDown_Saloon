
const icons = document.querySelectorAll('.icons img');
const chooseAvatarButton = document.querySelector('#choose_avatar');
const nicknameInput = document.querySelector('#nickname');
let count = 0; // Inicializa el contador en 0


// Agrega evento click al botón "Elige tu Avatar"
chooseAvatarButton.addEventListener('click', () => {
  nicknameInput.placeholder = "Ingresa tu nombre";
  document.getElementById("nickname").innerHTML=`
    <input type="text" id="nickname"  placeholder="Ingresa tu nombre"></input>`;
    icons.forEach(icon => {
    icon.style.display = 'block';
    icon.addEventListener('click', () => {
      const chosenAvatar = icon.getAttribute('src');
      const nickname = nicknameInput.value;
      const playerId = ++count; // Incrementa el contador y lo usa como ID del jugador
      addPlayer(playerId, nickname, chosenAvatar);
      icon.style.display = 'none'; // Oculta el avatar seleccionado
      chooseAvatarButton.disabled = true; // Desactiva el botón después de elegir un avatar
      nicknameInput.disabled = true; // Desactiva el campo de entrada de texto después de elegir un avatar
    });
  });
});
