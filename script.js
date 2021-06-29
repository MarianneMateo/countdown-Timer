let fecha = new Date('Dec 18, 2021 00:00:00').getTime(); //fecha marcada para finalizar el conteo

//creacion de la funcion para definir los valores de la cuenta regresiva
let cumpleaños = () => {
    let ahora = new Date().getTime(); //fecha actual
    hr = fecha - ahora; // resta de fecha donde finaliza el conteo con la fecha actual

    let segundos = 1000;
    let minutos = segundos * 60;
    let hora = minutos * 60;
    let dia = hora * 24;

    //calculos para definir los valores
    let d = Math.floor(hr / (dia));
    let h = Math.floor((hr % (dia)) / (hora))
    let m = Math.floor((hr % (hora)) / (minutos));
    let s = Math.floor((hr % (minutos)) / segundos);

    //asignacion de variables en los elementos por sus ids
    document.getElementById('dias').innerText = d;
    document.getElementById('horas').innerText = h;
    document.getElementById('minutos').innerText = m;
    document.getElementById('segundos').innerText = s;
}

//setInterval: ejecuta una funcion de forma repetitiva cada vez que termina el periodo de tiempo determinado
setInterval(function(){
    cumpleaños();
},1000);