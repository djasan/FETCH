/* // fetch appelle une source exterieur ou interireur
fetch("./data/menuEntries.json")
    // il recupere la reponse et la transforme soit en texte soit en json
    .then(res => res.text())
    .then(text => console.log(text))

// fetch est une fonction asynchrone
fetch("./data/menuEntries.json")
    // cette fois au format json
    .then(res => res.json())
    .then(json => {
        // en dehors de la derriere callback le parametre de cette dernière
        // n'est pas utilisable
        let menu = json;
        console.dir(menu);
    }) */
//console.dir(menu);// ne fonctionnera pas car synchrone

//https://musicbrainz.org/ws/2/release/?query=sardou&fmt=json&limit=25



// en dehors de la derriere callback le parametre de cette dernière
// n'est pas utilisable
const autocomplete = document.getElementById("autocomplete");
autocomplete.contentEditable = true;
autocomplete.addEventListener('keyup', () => {
    let container = "";
    fetch(`https://musicbrainz.org/ws/2/release/?query=${autocomplete.text}&fmt=json&limit=25`)
        .then(res => res.json())
        .then(json => {

            console.dir(json)
            json.releases.map(value => {

                console.dir(value);
                if (value["artist-credit"].length > 0) container += "artist:" + value["artist-credit"][0].name + '-'
    container += "title:" + value.title + "<br>"
            })
            document.getElementById("results").innerHTML = container
        })

})

