import '../../assets/styles/popup-style.scss'

document.getElementById('popup').innerHTML = `

<body>

    <button onclick="document.getElementById('start').setAttribute('data-on','on')">Inicio</button>
        
    <div class="panel" id="start" data-on="off" onclick="this.setAttribute('data-on','off')">
        <div>
            <p>Has llegado al mejor juego de duelos del lejano Oeste, en el que podrás participar hasta con 25 jugadores.
            </p>
            <p>Elige tu avatar y enfréntate de manera aleatoria en duelo con el resto de jugadores.</p>
            <p>¡Si ganas a tu adversario, seguirás jugando hasta que sólo quede uno!</p>

            <button class="popup" onclick="redirectToNextPage()">Iniciar partida</button>
        </div>
    </div>

</body>
`;


function redirectToNextPage() {
  window.location.href = 'players.html';
  }


