document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playButtons = document.querySelectorAll('.playBtn');

    playButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var audioPath = this.getAttribute('data-audio');

            if (audio.paused || audio.src !== audioPath) {
                audio.src = audioPath;
                audio.currentTime = 0; // Reinicia a reprodução para o início
                audio.play();
                setTimeout(function () {
                    audio.pause();
                }, 10000); // Pausa após 10 segundos
            } else {
                audio.pause();
            }
        });
    });
});