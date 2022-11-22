function addProduct(e) {
    product_name = document.getElementsByName('product')[0].value;

    product_div = document.createElement('div');
    product_div.style.width = '40vw';
    pencil_img = document.createElement('img');
    pencil_img.src = './img/pencil.png';
    trash_img = document.createElement('img');
    trash_img.src = './img/trash.png';
    trash_img.onclick = (e) => {
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement.parentElement.textContent);
        index = listaCompra.indexOf(e.target.parentElement.parentElement.textContent);
        if (index > -1) {
            listaCompra.splice(index, 1);
        }
        localStorage.listaCompra = listaCompra;
    };
    div = document.createElement('div');

    div.appendChild(pencil_img);
    div.appendChild(trash_img);

    product_div.innerHTML = product_name;
    product_div.classList.add('product');
    product_div.appendChild(div);
    shopping_list_div.appendChild(product_div);
    listaCompra.push(product_name);
    localStorage.listaCompra = JSON.stringify(listaCompra);

}
window.onload = () => {
    listaCompra = [];
    shopping_list_div = document.getElementById('products')
    add_btn = document.getElementById('add_img');
    add_btn.onclick = addProduct;
    clear_btn = document.getElementById('clear');
    clear_btn.onclick = () => {
        products = document.getElementById('products');
        products.innerHTML = '';
        localStorage.removeItem('listaCompra')
    }
    if (localStorage.listaCompra) {
        for (product of JSON.parse(localStorage.listaCompra)) {
            product_div = document.createElement('div');
            product_div.style.width = '40vw';
            pencil_img = document.createElement('img');
            pencil_img.src = './img/pencil.png';
            trash_img = document.createElement('img');
            trash_img.src = './img/trash.png';
            trash_img.onclick = (e) => {
                e.target.parentElement.parentElement.remove();
                console.log(e.target.parentElement.parentElement.textContent);
                index = listaCompra.indexOf(e.target.parentElement.parentElement.textContent);
                if (index > -1) {
                    listaCompra.splice(index, 1);
                }
                localStorage.listaCompra = listaCompra;
            };
            div = document.createElement('div');
            div.appendChild(pencil_img);
            div.appendChild(trash_img);
            product_div.innerHTML = product;
            product_div.classList.add('product');
            product_div.appendChild(div);
            shopping_list_div.appendChild(product_div);
            listaCompra.push(product);
            localStorage.listaCompra = JSON.stringify(listaCompra);
        }
    }
};

