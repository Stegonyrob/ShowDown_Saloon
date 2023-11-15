import '../../assets/styles/popup-style.scss'

<script>
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('popup').innerHTML = `
        <body>
            <button id="startButton">Inicio</button>
                
            <div class="panel" id="start" data-on="off" onclick="this.setAttribute('data-on','off')">
                <div>
                    <p>Has llegado al mejor juego de duelos del lejano Oeste, en el que podrás participar hasta con 25 jugadores.</p>
                    <p>Elige tu avatar y enfréntate de manera aleatoria en duelo con el resto de jugadores.</p>
                    <p>¡Si ganas a tu adversario, seguirás jugando hasta que sólo quede uno!</p>
                    <button class="popup" id="startButton">Iniciar partida</button>
                </div>
            </div>
        </body>
    `;

    
    document.getElementById('startButton').addEventListener('click', function() {
        redirectToNextPage();
    });

    function redirectToNextPage() {
        window.location.href = 'players.html';
    }

});
</script>

