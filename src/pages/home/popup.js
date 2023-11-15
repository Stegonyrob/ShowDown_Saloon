import '../../assets/styles/popup-style.scss'



document.addEventListener('DOMContentLoaded', function() {

    // Añade el contenido al elemento con id 'popup'
    document.getElementById('popup').innerHTML = `
        <body>

            <button onclick="togglePopup()">Inicio</button>
                
            <div class="panel" id="start" data-on="off" onclick="togglePopup()">
                <div>
                    <p>Has llegado al mejor juego de duelos del lejano Oeste, en el que podrás participar hasta con 25 jugadores.</p>
                    <p>Elige tu avatar y enfréntate de manera aleatoria en duelo con el resto de jugadores.</p>
                    <p>¡Si ganas a tu adversario, seguirás jugando hasta que sólo quede uno!</p>

                    <button class="popup" onclick="redirectToNextPage()">Iniciar partida</button>
                </div>
            </div>

        </body>
    `;

    // Función para redirigir a la siguiente página
    function redirectToNextPage() {
        window.location.href = 'players.html';
    }

    // Función para mostrar/ocultar el panel
    function togglePopup() {
        var startPanel = document.getElementById('start');
        var dataOn = startPanel.getAttribute('data-on');
        
        if (dataOn === 'off') {
            startPanel.setAttribute('data-on', 'on');
        } else {
            startPanel.setAttribute('data-on', 'off');
        }
    }

});


