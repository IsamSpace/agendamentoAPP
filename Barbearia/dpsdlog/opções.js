var nomeArquivoAtual = window.location.pathname; //nome da pag
let present = new Date(); //data atual (relogio do pc)

//lista das horas de reservas
function Click(data) {
    for(let a = 0; a < 1; a++){
        let ela = document.createElement("div");
        let elo = document.createElement("div");
    
        elo.classList.add("imgX");
        ela.id = ('horariosl');
    
        elo.textContent = ('X')
        elo.addEventListener('click', ()=>{
            ela.remove()
        })
    
        document.body.appendChild(ela);
        document.getElementById('horariosl').appendChild(elo);
    }
    

    let caixadehoras = document.getElementById('horariosl');
    caixadehoras.style.display = ('flex');
    for(let a = 0; a <= 10; a++){
        if(a !== 6){
            data.setHours(6);
            let ele = document.createElement('div');
            ele.classList.add("criado")
            ele.textContent = (`Data: ${data.toLocaleDateString()}, horario: ${data.getHours() + a}:00 (Livre)`);
            caixadehoras.appendChild(ele);
            ele.addEventListener('click', () => {window.alert('você resevou um horario')})
        }
    }
}

//lista dos dias
if (nomeArquivoAtual.includes("tdsoption.html") || nomeArquivoAtual.includes("opcaodois.html") || nomeArquivoAtual.includes("opcaotres.html")) {
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

//criar e fechar menu lateral
document.getElementById('hr').addEventListener('click', ()=>{
    
    //divs
    let ele = document.createElement("div");
    let ela = document.createElement("div");
    let eli = document.createElement("div");
    let elo = document.createElement("div");

    //identifição das divs
    elo.classList.add("imgX");
    elo.id = ('elo')
    eli.id = ('eli')
    ele.id = ('menu_lateral');
    
    //conteudo divs
    ela.textContent = ('X')
    eli.innerHTML = ("<div style='color:red'>&#9664;</div>")
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
    
    a.textContent = ('hhhhhhhhhhhhhhhhh');

    document.getElementById('ele').appendChild(inicio);
})