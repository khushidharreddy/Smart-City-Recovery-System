// ORIGINAL STATIONS

const stations = [
  "QA", "FM", "BT", "HX",
  "DP", "AK", "RC", "LM",
  "ZF", "KN", "PE", "CU",
  "SJ", "VG"
];


// DISPLAY STATIONS

const stationContainer = document.getElementById("stationContainer");

stations.forEach(station => {

    const div = document.createElement("div");

    div.classList.add("station");

    div.innerText = station;

    stationContainer.appendChild(div);
});


// FUNCTION TO CALCULATE ASCII VALUE

function getAsciiValue(station){

    return station.charCodeAt(0) + station.charCodeAt(1);
}


// CONVERT VALUES

function convertValues(){

    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    stations.forEach(station => {

        let row = `
            <tr>
                <td>${station}</td>
                <td>${getAsciiValue(station)}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}


// SORT STATIONS

function sortStations(){

    let sorted = [...stations];

    sorted.sort((a,b) => {
        return getAsciiValue(a) - getAsciiValue(b);
    });

    document.getElementById("sortedOutput").innerHTML =
        sorted.join(" → ");
}


// COUNT INVERSIONS

function countInversions(){

    let arr = stations.map(getAsciiValue);

    let count = 0;

    for(let i=0; i<arr.length; i++){

        for(let j=i+1; j<arr.length; j++){

            if(arr[i] > arr[j]){

                count++;
            }
        }
    }

    document.getElementById("inversionCount").innerText = count;
}


// RESET SYSTEM

function resetSystem(){

    document.getElementById("tableBody").innerHTML = "";

    document.getElementById("sortedOutput").innerHTML =
        "Waiting for recovery...";

    document.getElementById("inversionCount").innerText = "0";
}