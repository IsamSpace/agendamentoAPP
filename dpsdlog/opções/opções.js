const horaagen = [1,2,3,4,5,6,7,8,9,0]
let a = 0
while(a<10){
    let ele = document.createElement("li");
    ele.textContent = (`Horários livre hoje: ${horaagen[a]}`);
    document.getElementById('lista').appendChild(ele);
    a++
}