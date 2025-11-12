const audio = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeControl = document.getElementById("volume-control");

let isPlaying = false;

// Função que toca a música clicada
function playSong(previewUrl, title, artist, cover) {
  const playerTitle = document.getElementById("player-title");
  const playerArtist = document.getElementById("player-artist");
  const playerCover = document.getElementById("player-cover");

  audio.src = previewUrl;
  playerTitle.textContent = title;
  playerArtist.textContent = artist;
  playerCover.src = cover;

  audio.play();
  isPlaying = true;
  playButton.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
}

// Botão play/pause
playButton.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playButton.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
  } else {
    audio.play();
    playButton.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
  }
  isPlaying = !isPlaying;
});

// Atualiza barra e tempo
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;

    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

// Permite arrastar a barra
progressBar.addEventListener("input", () => {
  if (audio.duration) {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  }
});

// Volume
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

// Função para formatar o tempo (min:seg)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
