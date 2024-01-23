//criar e fechar menu lateral
document.getElementById('hr').addEventListener('click', ()=>{
    
    //divs
        let ele = document.createElement("div");
        let ela = document.createElement("div");
        let eli = document.createElement("div");
        let elo = document.createElement("div");

    //identifição das divs
        ela.classList.add("imgX");
        elo.id = ('elo');
        eli.id = ('eli');
        ele.id = ('menu_lateral');

    //conteudo divs
        ela.textContent = ('X')
        eli.innerHTML = ("<a href='#' style='color:red' id='seta'>&#9664;</a>")
        ela.addEventListener('click', ()=>{
            ele.remove()
        })
    
    //add divs
        document.body.appendChild(ele);
        document.getElementById('menu_lateral').appendChild(elo);
        document.getElementById('elo').appendChild(eli);
        document.getElementById('elo').appendChild(ela);

    //iper links
        let inicio = document.createElement("a");
        let agenda = document.createElement("a");
        let prod = document.createElement("a");
    
    //identifição das inper links
        inicio.classList.add('cont_menu');
        agenda.classList.add('cont_menu');
        prod.classList.add('cont_menu');

    //conteudo a do menu
        inicio.href = ('https://isamspace.github.io');
        inicio.textContent = ('inicio');
        agenda.href = ('https://isamspace.github.io');
        agenda.textContent = ('agendamentos');
        prod.href = ('https://isamspace.github.io');
        prod.textContent = ('produtos');

    //add iper links menu
        document.getElementById('menu_lateral').appendChild(inicio);
        document.getElementById('menu_lateral').appendChild(agenda);
        document.getElementById('menu_lateral').appendChild(prod);
})