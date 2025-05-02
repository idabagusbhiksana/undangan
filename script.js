const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');

if (nama) {
  document.getElementById("salam").innerText = `Yth. ${nama},`;
}

function konfirmasi() {
  const pesan = `Halo ${nama || 'tamu'}, saya akan hadir.`;
  const url = `https://wa.me/6285930218821?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}
