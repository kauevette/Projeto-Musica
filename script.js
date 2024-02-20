document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playButtons = document.querySelectorAll('.playBtn');

    playButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var audioPath = this.getAttribute('data-audio');

            if (audio.paused || audio.src !== audioPath) {
                audio.src = audioPath;
                audio.play();
                updateButtonStates(this);
            } else {
                audio.pause();
                audio.currentTime = 0;
                updateButtonStates(null);
            }
        });
    });

    function updateButtonStates(clickedButton) {
        playButtons.forEach(function (button) {
            if (button === clickedButton) {
                button = audio.paused ? 'Pausar Música' : 'Reproduzir Música';
            } else {
                button = 'Reproduzir Música';
            }
        });
    }
});