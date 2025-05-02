// Handle URL parameters
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');

// Set guest name if available
if (nama) {
  document.getElementById("salam").innerText = `Yth. ${nama},`;
}

// WhatsApp confirmation function
function konfirmasi() {
  const pesan = `Halo ${nama || 'tamu undangan'}, saya akan hadir pada acara diksa pariksa.`;
  const url = `https://wa.me/6285930218821?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}

// Audio handling for all devices
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('weddingAudio');
  const musicToggle = document.getElementById('musicToggle');
  let audioPlayAttempted = false;

  // Try autoplay (will work on some devices)
  const tryAutoplay = () => {
    audio.play()
      .then(() => {
        musicToggle.classList.add('playing');
      })
      .catch(error => {
        console.log('Autoplay blocked:', error);
        musicToggle.style.display = 'block';
      });
  };

  // First attempt (may work on desktop)
  tryAutoplay();
  
  // Music toggle functionality
  musicToggle.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      this.classList.add('playing');
    } else {
      audio.pause();
      this.classList.remove('playing');
    }
  });

  // Second attempt on first user interaction (for Safari)
  document.body.addEventListener('click', function firstInteraction() {
    if (!audioPlayAttempted) {
      tryAutoplay();
      audioPlayAttempted = true;
    }
    document.body.removeEventListener('click', firstInteraction);
  });

  // Third attempt on touch (for mobile)
  document.body.addEventListener('touchend', function firstTouch() {
    if (!audioPlayAttempted) {
      tryAutoplay();
      audioPlayAttempted = true;
    }
    document.body.removeEventListener('touchend', firstTouch);
  }, { once: true });
});
