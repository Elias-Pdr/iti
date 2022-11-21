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


