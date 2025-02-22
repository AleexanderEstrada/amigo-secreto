// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let vectorAmigos = [];
function agregarAmigo(params) {
    vectorAmigos.push(document.getElementById('amigo').value);
    //Valida que si se ingreso un nombre
    if ((document.getElementById("amigo").value == "") || (!isNaN(document.getElementById("amigo").value))) {
        alert("ingrese un nombre valido:");
        vectorAmigos.pop()

    }
    limpiarCaja();
    verListaAmigos();
    console.log(vectorAmigos);
    
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    
}

function verListaAmigos() {
    //Obtiene el elemento d ela lista
    let lista = document.getElementById("listaAmigos");
    //Limpiar lista
    lista.innerHTML = "";
    //Iterar sobre el arreglo
    for (let i = 0; i < vectorAmigos.length; i++) {
        //Se crea un nuevo elemento de la lista
        const li = document.createElement("li");
        li.textContent = vectorAmigos[i];
        //Agrega el nuevo elemnto a la lista
        lista.appendChild(li);
        
    }
    
}

function sortearAmigo() {
    if (vectorAmigos != "") {
        let contando = 0;
        for (let i = 0; i < vectorAmigos.length; i++) {
            contando = contando + 1;
        }
        //console.log(contando);
        aleatorio = Math.floor(Math.random()*contando-1)+1;
        //console.log(aleatorio);
        const amigoSecreto = vectorAmigos[aleatorio];
        //console.log(amigoSecreto);
        let list = document.getElementById("listaAmigos");
        const ganador = document.getElementById("resultado");
        ganador.textContent = `EL AMIGO SECRETO SORTEADO ES: ${amigoSecreto}`;
        list.innerHTML = "";

        
    } else {
        alert("No se han ingresado nombres para realizar el sorteo!!!")
    }

    
}

