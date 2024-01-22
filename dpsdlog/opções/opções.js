var nomeArquivoAtual = window.location.pathname; //nome da pag
let present = new Date(); //data atual (relogio do pc)

//lista das horas de reservas
function Click(data) {
    let caixadehoras = document.getElementById('horariosl');
    caixadehoras.style.display = ('flex');
    for(let a = 0; a <= 11; a++){
        if(a !== 6){
            data.setHours(6);
            let ele = document.createElement('p');
            ele.textContent = (`Data: ${data.toLocaleDateString()}, horario: ${data.getHours() + a}:00 (Livre)`);
            caixadehoras.appendChild(ele);
            ele.addEventListener('click', () => {window.alert('você resevou um horario')})
        }
    }
}

//lista dos dias
if (nomeArquivoAtual.includes("opcaoum.html") || nomeArquivoAtual.includes("opcaodois.html") || nomeArquivoAtual.includes("opcaotres.html")) {
    for (let a = 0; a < 30; a++) {
        
        let data = new Date();
        
        data.setDate(present.getDate() + a); // Adiciona 'a' dias à data atual

        if(data.getDay() !== 0 && data.getDay() !== 6){
            let ele = document.createElement("div");
            ele.classList.add("criado");

            // Ajuste para colocar "Dia:" e a data em lados diferentes
            ele.innerHTML = `<span class="dia">Dia:</span> <span class="data">${data.toLocaleDateString()}</span>`;
            ele.addEventListener('click', function() {
                Click(data);
            });

            document.getElementById('lista').appendChild(ele);
        }
    }
}


//fechar lista das horas de reservas
function fechar(){
    let caixadehoras = document.getElementById('horariosl');
    caixadehoras.style.display = ('none');
    caixadehoras.innerHTML = '<div class="imgX" onclick="fechar()">X</div>';
}

//criar e fechar menu lateraç
document.getElementById('hr').addEventListener('click', ()=>{

    let ele = document.createElement("div");
    let elo = document.createElement("div");

    elo.classList.add("imgX");
    ele.id = ('menu_lateral');

    elo.textContent = ('X')
    elo.addEventListener('click', ()=>{
        ele.remove()
    })

    document.body.appendChild(ele);
    document.getElementById('menu_lateral').appendChild(elo);
})