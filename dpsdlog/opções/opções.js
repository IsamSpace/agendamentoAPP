var nomeArquivoAtual = window.location.pathname;
let present = new Date();

function Click(data) {

    for(let a = 0; a < 8; a+=1){
        document.write(`<link rel="stylesheet" href="style.css"><p style='text-align:center; font-weight:900'>${data.toLocaleDateString()}, ${a}</p>`);
    }
}

if (nomeArquivoAtual.includes("opcaoum.html")) {
    let a = 0;
    while (a < 30) {
        let ele = document.createElement("li");
        let data = new Date();
        data.setDate(present.getDate() + a); // Adiciona 'a' dias à data atual
        ele.textContent = (`Dia: ${data.toLocaleDateString()}`);
        ele.addEventListener('click', function() {
            Click(data);
        });
        document.getElementById('lista').appendChild(ele);
        a++;
    }
} else if (nomeArquivoAtual.includes("opcaodois.html")) {
    let a = 0;
    while (a < 30) {
        let ele = document.createElement("li");
        let data = new Date();
        data.setDate(present.getDate() + a); // Adiciona 'a' dias à data atual
        ele.textContent = (`Dia: ${data.toLocaleDateString()}`);
        ele.addEventListener('click', function() {
            Click(data);
        });
        document.getElementById('lista').appendChild(ele);
        a++;
    }
} else if (nomeArquivoAtual.includes("opcaotres.html")) {
    let a = 0;
    while (a < 30) {
        let ele = document.createElement("li");
        let data = new Date();
        data.setDate(present.getDate() + a); // Adiciona 'a' dias à data atual
        ele.textContent = (`Dia: ${data.toLocaleDateString()}`);
        ele.addEventListener('click', function() {
            Click(data);
        });
        document.getElementById('lista').appendChild(ele);
        a++;
    }
}


