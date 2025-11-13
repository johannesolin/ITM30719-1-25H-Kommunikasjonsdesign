// koden for å lage trafikkgrafen er brukt ChatGPT til: https://chatgpt.com/share/6915b031-cd0c-8003-b50b-331e069495b6

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('trafikkGraf');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const data = {
        labels: ['2024', '2023', '2022', '2021', '2020'],
        datasets: [
            {
                label: 'Drept',
                data: [21, 23, 21, 16, 21],
                backgroundColor: '#ff3b30',   // Rød – 100% opaque
                borderColor: '#b3201a',
                borderWidth: 1
            },
            {
                label: 'Hardt skadd',
                data: [2, 1, 0, 1, 1],
                backgroundColor: '#ff9500',   // Oransje
                borderColor: '#b36100',
                borderWidth: 1
            },
            {
                label: 'Lettere skadd',
                data: [0, 1, 2, 0, 1],
                backgroundColor: '#34c759',   // Grønn
                borderColor: '#1e7b38',
                borderWidth: 1
            },
            {
                label: 'Sum',
                data: [23, 25, 23, 17, 23],
                type: 'line',
                borderWidth: 3,
                borderColor: '#1e90ff',  // Kraftig blå linje
                fill: false,
                tension: 0.2             // Liten smooth-effekt
            }
        ]
    };
    

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Drepte og skadde 2020–2024'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Antall personer'
                    }
                }
            }
        }
    });
});
