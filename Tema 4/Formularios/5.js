function fillInput(e, input) {
    console.log(e.value)
    input.value = e.value;
}

window.onload = () => {
    card_number = document.getElementsByName('card_number')[0];
    card_number.onkeyup = () => { fillInput(card_number, document.getElementsByTagName('input')[0]) };
    card_holder = document.getElementsByName('card_holder')[0];
    card_holder.onkeyup = () => { fillInput(card_holder, document.getElementsByTagName('input')[1]) };
    month = document.getElementsByName('month')[0];
    month.addEventListener("onchange", () => { fillInput(month, document.getElementsByTagName('input')[2]) });
    console.log(document.getElementsByTagName('input')[2]);
    year = document.getElementsByName('year')[0];
    year.onchange = () => { fillInput(year, document.getElementsByTagName('input')[3]) };

}