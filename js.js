const infoData = {
    polari: {
        title: "Climi Polari",
        description: `
            <p align="justify">I climi polari si trovano nelle regioni più estreme della Terra...</p>
        `,
        floraImage: "https://www.icsedegliano.it/wp-content/uploads/2024/07/licheni-1024x683.jpg",
        faunaImage: "https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg",
        buttons: '<button onclick="showInfo(\'montani\')">Climi Montani</button><button onclick="showInfo(\'temperati\')">Climi Temperati</button>'
    },
    // (Ripeti lo stesso schema per gli altri climi)
};

function showInfo(climate) {
    const infoBox = document.getElementById('infoBox');
    const climateInfo = infoData[climate];
    infoBox.innerHTML = `
        <h2>${climateInfo.title}</h2>
        <p>${climateInfo.description}</p>
        <div class="flora-fauna-images">
            <img src="${climateInfo.floraImage}" alt="Flora ${climateInfo.title}">
            <img src="${climateInfo.faunaImage}" alt="Fauna ${climateInfo.title}">
        </div>
        <div class="buttons">${climateInfo.buttons}</div>
    `;
}

function showHome() {
    const infoBox = document.getElementById('infoBox');
    infoBox.innerHTML = `
        <h2>Benvenuto!</h2>
        <p>Seleziona un clima per visualizzare flora, fauna e caratteristiche principali.</p>
        <div class="buttons">
            <button onclick="showInfo('polari')">Climi Polari</button>
            <button onclick="showInfo('temperati')">Climi Temperati</button>
            <button onclick="showInfo('tropicali')">Climi Tropicali</button>
            <button onclick="showInfo('aridi')">Climi Aridi</button>
            <button onclick="showInfo('montani')">Climi Montani</button>
        </div>
    `;
}

function showBlankPage() {
    const infoBox = document.getElementById('infoBox');
    infoBox.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center;">
            <h1>
                <p align="justify" style="font-size: 1.2rem;">Il sito vuole sensibilizzare sulle differenze climatiche...</p>
            </h1>
        </div>
    `;
}
