function saveInfos(){
    let myName = document.getElementById("myName").value
    let myMoney = document.getElementById("myMoney").value
    let vitName = document.getElementById("vitName").value
    let vitCPForCNPJ = document.getElementById("vitCPForCNPJ").value
    let vitTel = document.getElementById("vitTel").value
    let vitBank = document.getElementById("vitBank").value

    localStorage.setItem("myName",myName)
    localStorage.setItem("myMoney",myMoney)
    localStorage.setItem("vitName",vitName)
    localStorage.setItem("vitCPForCNPJ",vitCPForCNPJ)
    localStorage.setItem("vitTel",vitTel)
    localStorage.setItem("vitBank",vitBank)
}


if(document.getElementById("myName") != null){

    let _myName = document.getElementById("myName")
    _myName.innerHTML = localStorage.getItem("myName")
    
}

if(document.getElementById("myMoney") != null){

    let _myMoney = document.getElementById("myMoney")
    _myMoney.innerHTML = localStorage.getItem("myMoney")

}

if(document.getElementById("vitName") != null){
    let _vitName = document.getElementById("vitName")
    _vitName.innerHTML = localStorage.getItem("vitName")

}

if(document.getElementById("vitCPForCNPJ") != null){
    let _vitCPForCNPJ = document.getElementById("vitCPForCNPJ")
    _vitCPForCNPJ.innerHTML = localStorage.getItem("vitCPForCNPJ")
}

if(document.getElementById("vitTel") != null){
    let _vitTel = document.getElementById("vitTel")
    _vitTel.innerHTML = localStorage.getItem("vitTel")
}

if(document.getElementById("vitBank") != null){
    let _vitBank = document.getElementById("vitBank")
    _vitBank.innerHTML = localStorage.getItem("vitBank")
}

if(document.getElementById("chaveUsada") != null){
    let _chaveUsada = document.getElementById("chaveUsada")
    _chaveUsada.innerHTML = localStorage.getItem("chaveUsada")
}

if(document.getElementById("preco") != null){
    let _preco = document.getElementById("preco")
    _preco.innerHTML = localStorage.getItem("preco")
}

if(document.getElementById("dia") != null){
    let _dia = document.getElementById("dia")
    const now = new Date;
    const month = now.getMonth()
    const day = now.getDate()
    let textMonth = ''


    switch (month + 1) {
        case 2:
            textMonth = 'fevereiro'
            break;
        case 3:
            textMonth = 'março'
            break;
        case 4:
            textMonth = 'abril'
            break;
        case 5:
            textMonth = 'maio'
            break;
        case 6:
            textMonth = 'junho'
            break;
        case 7:
            textMonth = 'julho'
            break;
        case 8:
            textMonth = 'agosto'
            break;
        case 9:
            textMonth = 'setembro'
            break;
        case 10:
            textMonth = 'outubro'
            break;
        case 11:
            textMonth = 'novembro'
            break;
        case 12:
            textMonth = 'dezembro'
            break;
        case 13:
            textMonth = 'janeiro'
            break;
    }

    _dia.innerHTML = day + " de " + textMonth;
}

function stopTime() {
    const now = new Date;

    let pagDia = now.getDate()
    let pagMes = now.getMonth()
    let pagAno = now.getFullYear()
    let pagHoras = now.getHours()
    let pagMinutos = now.getMinutes()
    let pagSegundos = now.getSeconds()

    switch (pagMes + 1) {
        case 2:
            textMonth = 'fevereiro'
            break;
        case 3:
            textMonth = 'março'
            break;
        case 4:
            textMonth = 'abril'
            break;
        case 5:
            textMonth = 'maio'
            break;
        case 6:
            textMonth = 'junho'
            break;
        case 7:
            textMonth = 'julho'
            break;
        case 8:
            textMonth = 'agosto'
            break;
        case 9:
            textMonth = 'setembro'
            break;
        case 10:
            textMonth = 'outubro'
            break;
        case 11:
            textMonth = 'novembro'
            break;
        case 12:
            textMonth = 'dezembro'
            break;
        case 13:
            textMonth = 'janeiro'
            break;
    }

    if (pagHoras < 10) {
        console.log("<10");
        pagHoras = "0" + pagHoras;
    }
    if (pagMinutos < 10) {
        console.log("<10");
        pagMinutos = "0" + pagMinutos
    }
    if (pagSegundos < 10) {
        console.log("pagSegundos<10");
        pagSegundos = "0" + pagSegundos;

    }

    localStorage.setItem("pagDia", pagDia)
    localStorage.setItem("pagMes", textMonth)
    localStorage.setItem("pagAno", pagAno)
    localStorage.setItem("pagHoras", pagHoras)
    localStorage.setItem("pagMinutos", pagMinutos)
    localStorage.setItem("pagSegundos", pagSegundos)

    console.log(pagDia + " de " + textMonth + " de " + pagAno + " - " + pagHoras + ":" + pagMinutos + ":" + pagSegundos);

}


let _pagDia = localStorage.getItem("pagDia")
let _pagMes = localStorage.getItem("pagMes")
let _pagAno = localStorage.getItem("pagAno")
let _pagHoras = localStorage.getItem("pagHoras")
let _pagMinutos = localStorage.getItem("pagMinutos")
let _pagSegundos = localStorage.getItem("pagSegundos")

if(document.getElementById("textDate") != null){
    let _textDate = document.getElementById("textDate")


    _textDate.innerHTML = _pagDia + " de " + _pagMes + " de " + _pagAno + " - " + _pagHoras + ":" + _pagMinutos + ":" + _pagSegundos
}

if(document.getElementById("dataDiferente") != null){

    switch (_pagMes) {
        case 'janeiro':
            _pagMesF = 'jan'
            break;
        case 'fevereiro':
            _pagMesF = 'fev'
            break;
        case 'março':
            _pagMesF = 'mar'
            break;
        case 'abril':
            _pagMesF = 'abr'
            break;
        case 'maio':
            _pagMesF = 'mai'
            break;
        case 'junho':
            _pagMesF = 'jun'
            break;
        case 'julho':
            _pagMesF = 'jul'
            break;
        case 'agosto':
            _pagMesF = 'ago'
            break;
        case 'setembro':
            _pagMesF = 'set'
            break;
        case 'outubro':
            _pagMesF = 'out'
            break;
        case 'novembro':
            _pagMesF = 'nov'
            break;
        case 'dezembro':
            _pagMesF = 'dez'
            break;
    }

    document.getElementById("dataDiferente").innerHTML = _pagDia +" "+ _pagMesF + '.'
}