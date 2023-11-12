import '../home/footer.js';
import '../home/header.js';

document.getElementById('cards').innerHTML = `

<section>
<div id="header"></div>
    <div id="cards">
      <section>
        <h1>Seleciona tu Avatar</h1>
        <div class="container" id="players">
          <div class="card" id="avatars">
            <input type="text" placeholder="Name" name="name" id="name-input">
            <button id="add-name-button">Añadir Jugador</button>
            <button id="delete-name-button">Eliminar Jugador</button>
            <ul id="name-list"></ul>
            <ul id="players_name"></ul>
          </div>
        </div>
      </section>
    </div>
    <div id="footer"></div>
</section>

`