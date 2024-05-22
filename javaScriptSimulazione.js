var table, row, newRow, colType, colNetwork, colPort, colNexthop, colCost, colNexthop, colHop;

function nuovaRigaRT(idTabella, idRiga, type, network, classe, port, nexthop, metric){
    table = document.getElementById(idTabella);
    newRow = table.insertRow(); 
    newRow.setAttribute("id", idRiga);
    colType = newRow.insertCell(0); 
    colNetwork = newRow.insertCell(1); 
    colPort = newRow.insertCell(2); 
    colNexthop = newRow.insertCell(3);
    colCost = newRow.insertCell(4);
    colType.innerHTML = type; 
    colNetwork.innerHTML = network;
    colNetwork.setAttribute("class", classe);
    colPort.innerHTML = port;
    colNexthop.innerHTML = nexthop;
    colCost.innerHTML = metric;
}
function cambiaDVR(id, network, classe1, nexthop, classe2, hop){
    table = document.getElementById(id);
    table.deleteRow(1);
    newRow = table.insertRow(); 
    newRow.setAttribute("id", "rigaDVR1");
    colNetwork = newRow.insertCell(0); 
    colNexthop = newRow.insertCell(1); 
    colHop = newRow.insertCell(2); 
    colNetwork.innerHTML = network; 
    colNexthop.innerHTML = nexthop;
    colHop.innerHTML = hop;
    colNetwork.setAttribute("class", classe1);
    colNexthop.setAttribute("class", classe2);
    colHop.setAttribute("class", "tdDVR");
}

function gestioneVelocita(event){
    if(event.target.id=="veloce"){
        velocita= 4;
        veloce.css("backgroundColor", "lightskyblue");
        lento.css("backgroundColor", "");
        normale.css("backgroundColor", "");
    }
    else if(event.target.id=="normale"){
        velocita= 10;
        normale.css("backgroundColor", "lightskyblue");
        lento.css("backgroundColor", "");
        veloce.css("backgroundColor", "");
    }
    else if(event.target.id=="lento"){
        velocita= 30;
        lento.css("backgroundColor", "lightskyblue");
        veloce.css("backgroundColor", "");
        normale.css("backgroundColor", "");
    }
    if(ifInizio==true&&passaggio!=0){
        clearInterval(id);
        id=setInterval(muovi, velocita);
    }
}

function tabR2(){
    if(document.getElementById("cont-tabellaR2").style.opacity==0){
        document.getElementById("cont-tabellaR2").style.opacity=1;
        utenteVisuaR2= true;
    }
    else{
        document.getElementById("cont-tabellaR2").style.opacity=0;
        utenteVisuaR2= false;
    }
}
function tabR1(){
    if(document.getElementById("cont-tabellaR1").style.opacity==0){
        document.getElementById("cont-tabellaR1").style.opacity=1;
        utenteVisuaR1= true;
    }
    else{
        document.getElementById("cont-tabellaR1").style.opacity=0;
        utenteVisuaR1= false;
    }
}
/*
<div class="pacchetti" style="width: 400px">
    <p style="text-align:center">PACCHETTI</p>
    <img src="img/pacchetti/pCaccola.png" width="50px">
    <img src="img/pacchetti/pRosa.png" width="50px">
    <img src="img/pacchetti/pMagenta.png" width="50px">
    <img src="img/pacchetti/pSmeraldo.png" width="50px">
    <img src="img/pacchetti/pViola.png" width="50px">
    <img src="img/pacchetti/pMuschio.png" width="50px">
    <img src="img/pacchetti/pFacciotto.png" width="50px">
</div>
*/