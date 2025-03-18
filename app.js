// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();  // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ""; // Limpiar el input

    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crear un <li>
        li.textContent = amigo; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregarlo a la <ul>
    });
}


function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}