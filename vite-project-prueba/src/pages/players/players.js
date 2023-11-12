import '../home/footer.js';
import '../home/header.js';
import '../../assets/styles/players-style.scss';
document.getElementById('cards').innerHTML = `
<section>
<div id="header"></div>
<section>
      <div class="container" >
          <div id="cards">
            <h1>Seleciona tu Avatar</h1>
            <img src="" class="card" id="avatars">
            <input type="text" placeholder="Name" name="name" id="name-input">
            <div>
            <ul id="name-list"></ul>
            <ul id="players_name"></ul>
            </div>
            <div>
            <button id="add-name-button">Añadir Jugador</button>
            <button id="delete-name-button">Eliminar Jugador</button>
            </div>
          </div>
    </div>
    </section>
    <div id="footer"></div>
</section>
`