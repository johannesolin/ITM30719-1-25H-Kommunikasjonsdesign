//kode tatt fra: https://leafletjs.com
// Oppretter kartet
const map = L.map('map').setView([51.505, -0.09], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Markøren
L.marker([59.8330, 11.2408])
  .addTo(map)
  .bindPopup('Ulykkessted – Riksvei 22 øst for Lillestrøm')
  .openPopup();