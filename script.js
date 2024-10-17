const songs = document.querySelectorAll('.song');
const audioPlayer = document.getElementById('audio-player');
let currentSong = null;

songs.forEach(song => {
    song.addEventListener('click', function() {
        const audioSrc = this.getAttribute('data-audio');
        const playButton = this.querySelector('.play-button');

        if (currentSong === this) {
            // Pause the current song
            if (!audioPlayer.paused) {
                audioPlayer.pause();
                playButton.textContent = '▶'; // Change to play icon
            } else {
                // Resume the current song
                audioPlayer.play();
                playButton.textContent = '⏸'; // Change to pause icon
            }
        } else {
            // Play new song
            if (currentSong) {
                currentSong.querySelector('.play-button').textContent = '▶';
                currentSong.classList.remove('playing');
            }

            currentSong = this;
            audioPlayer.src = audioSrc;
            audioPlayer.play();
            playButton.textContent = '⏸'; // Change to pause icon
        }

        // Add class for active song
        this.classList.toggle('playing');
    });
});

audioPlayer.addEventListener('ended', function() {
    if (currentSong) {
        currentSong.querySelector('.play-button').textContent = '▶';
        currentSong.classList.remove('playing');
    }
});