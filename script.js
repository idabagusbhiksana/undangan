// Handle URL parameters
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');

// Set guest name if available
if (nama) {
  document.getElementById("salam").innerText = `Yth. ${nama},`;
}

// Konfirmasi WhatsApp (tetap sama)
function konfirmasi() {
  const nama = new URLSearchParams(window.location.search).get('nama') || 'tamu undangan';
  const pesan = `Halo ${nama}, saya akan hadir pada acara diksa pariksa.`;
  const url = `https://wa.me/6285930218821?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}

// Audio Handling (perbaikan utama)
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('weddingAudio');
  const musicToggle = document.getElementById('musicToggle');
  
  // Fungsi untuk memulai audio
  const startAudio = () => {
    audio.muted = false;
    audio.play()
      .then(() => {
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<span class="music-icon">🔊</span>';
      })
      .catch(error => {
        console.log('Autoplay diblokir:', error);
        musicToggle.style.display = 'block';
      });
  };

  // Strategy 1: Coba autoplay langsung (untuk desktop)
  startAudio();

  // Strategy 2: Aktifkan saat interaksi pertama (untuk Safari)
  const enableAudio = () => {
    if (audio.paused) {
      startAudio();
    }
    document.body.removeEventListener('click', enableAudio);
    document.body.removeEventListener('touchend', enableAudio);
  };

  document.body.addEventListener('click', enableAudio, { once: true });
  document.body.addEventListener('touchend', enableAudio, { once: true });

  // Kontrol manual
  musicToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (audio.paused) {
      startAudio();
    } else {
      audio.pause();
      this.classList.remove('playing');
      this.innerHTML = '<span class="music-icon">🔇</span>';
    }
  });
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
