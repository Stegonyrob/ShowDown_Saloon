


document.getElementById('header').innerHTML = `
<body>
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
</body>
</html>
`