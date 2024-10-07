let stations = [];

document.getElementById('add-station-button').addEventListener('click', () => {
    const stationName = document.getElementById('station-name').value;
    const stationCapacity = parseInt(document.getElementById('station-capacity').value);
    const station = { name: stationName, capacity: stationCapacity, trains: 0 };
    stations.push(station);
    updateStationSelect();
    updateStationList();
});

document.getElementById('add-train-button').addEventListener('click', () => {
    const selectedStation = document.getElementById('station-select').value;
    const station = stations.find((station) => station.name === selectedStation);
    if (station) {
        station.trains++;
        updateStationList();
    }
});

function updateStationSelect() {
    const stationSelect = document.getElementById('station-select');
    stationSelect.innerHTML = '';
    stations.forEach((station) => {
        const option = document.createElement('option');
        option.value = station.name;
        option.text = station.name;
        stationSelect.appendChild(option);
    });
}

function updateStationList() {
    const stationUl = document.getElementById('station-ul');
    stationUl.innerHTML = '';
    stations.forEach((station) => {
        const stationLi = document.createElement('li');
        stationLi.className = station.trains > station.capacity ? 'station over-capacity' : 'station';
        stationLi.innerHTML = `
            <h2>${station.name}</h2>
            <p>Capacity: ${station.capacity}</p>
            <p>Trains: ${station.trains}</p>
        `;
        stationUl.appendChild(stationLi);
    });
}
