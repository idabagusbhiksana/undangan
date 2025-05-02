const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');

if (nama) {
  document.getElementById("salam").innerText = `Yth. ${nama},`;
}

function konfirmasi() {
  const pesan = `Halo ${nama || 'tamu'}, saya akan hadir.`;
  const url = `https://wa.me/62895392188821?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}
