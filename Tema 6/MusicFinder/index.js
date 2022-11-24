function sendRequest() {
    request = new XMLHttpRequest();
    petition = 'https://api.spotify.com/v1/search?limit=30&q=' + input.value + '&type=album';
    request.open('GET', petition, true);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer ' + access_token);
    request.onreadystatechange = dealResponse;
    request.send();
}

function dealResponse() {
    response = request.responseText;
    if (request.status == 200) {
        results.innerHTML = '';
        response_json = JSON.parse(response);
        for (elem of response_json.albums.items) {
            elem_div = document.createElement('div');
            elem_div.classList.add('result');
            title_div = document.createElement('div');
            title_div.innerHTML = elem.name;
            title_div.classList.add('title');
            elem_div.appendChild(title_div);
            img = document.createElement('img');
            img.src = elem.images[0].url;
            console.log(elem.name);
            elem_div.appendChild(img);
            results.appendChild(elem_div);
        }
    }
}

function renewToken() {
    request2 = new XMLHttpRequest();
    petition2 = 'https://accounts.spotify.com/authorize?response_type=token&client_id=40a1ec0b41594dd8915a1ed05ab5585e&response_type=code&redirect_uri=https%3A%2F%2Fwww.google.com%0A';
    request2.open('GET', petition2, true);
    // request2.setRequestHeader('Access-Control-Allow-Origin', '*');
    request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request2.setRequestHeader('Authorization', 'NDBhMWVjMGI0MTU5NGRkODkxNWExZWQwNWFiNTU4NWU=:MTg1YzM4ZTRmZDg5NGEwZjk0ZjI0NTNkM2QxNGUxNTU=');
    request2.onreadystatechange = () => {
        console.log(request2.responseText)
    }
    request2.send();
}
window.onload = () => {
    access_token = 'BQDZayXAql8VoV1VwvkHPCpzGNvsmD4mFTkIf-pRplqsX7mr4iLOBGZJ1HXa_zBoCb44wJlUXJu4J00LRKMw1UINz7DEjY_rmnd4pW23tjuYHohcqpFPpe0nuAsxRDG_b4sUqVtEjMJopsvaQhi-EdmSwZq1JwUErA04gWiIdJm49nGEOhoJPEQtka_DCg';
    input = document.getElementsByTagName('input')[0];
    results = document.getElementById('results');
    search_btn = document.getElementsByTagName('button')[0];
    search_btn.onclick = sendRequest;
    renewToken();
}