function generateCards(options){
    return options.sort(() => {return Math.random() - 0.5})
}

function showCard(e){
    img = e.target;
    img.src = "./img/" +cards_text[parseInt(img.id)] + "_card.png";
}
window.onload = () => {
    options = ['coconut', 'coconut', 'lemon', 'lemon', 'strawberry', 'strawberry', 'pineapple', 'pineapple', 'grape', 'grape'];
    cards_text = generateCards(options);
    cards_imgs = document.getElementsByClassName('flip-card-back'); 
    for (card of  cards_imgs){
        console.log(card.children[0].id);
        card.children[0].src = "./img/" + cards_text[parseInt(card.children[0].id)] + "_card.png";
        console.log("./img/" + cards_text[parseInt(card.id)] + "_card.png");
    }
}