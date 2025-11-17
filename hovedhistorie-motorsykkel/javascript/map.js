// Oppretter kartet
const map = L.map('map').setView([59.818708, 11.243216], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Markøren
L.marker([59.818708, 11.243216])
  .addTo(map)
  .bindPopup('Ulykkessted – Riksvei 22 øst for Lillestrøm')
  .openPopup();
