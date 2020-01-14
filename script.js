function init(){
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event){
    const reader = new FileReader()
    reader.onload = parseKMLFile;
    reader.readAsText(event.target.files[0])
}

function parseKMLFile(event, map){
    let content = event.target.result;
    initMap(content);
}

function initMap(markers) {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 2});
    var marker = new google.maps.Marker({position: uluru, map: map});
    var parser = new geoXML3.parser({map: map});
    parser.parseKmlString(markers);
}


