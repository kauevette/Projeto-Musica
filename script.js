document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playButtons = document.querySelectorAll('.playBtn');

    playButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var audioPath = this.getAttribute('data-audio');

            if (audio.paused || audio.src !== audioPath) {
                audio.src = audioPath;
                audio.play();
            } else {
                audio.pause();
                this.innerHTML = 'Reproduzir Música';
            }
        });
    });
});