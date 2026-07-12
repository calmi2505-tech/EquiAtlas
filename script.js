const imagen = document.getElementById("imagenCaballo");
const titulo = document.querySelector("#panel h2");
const texto = document.getElementById("descripcion");
const lista = document.getElementById("listaEstructuras");

function mostrarSistema(imagenSrc, nombre, descripcion, estructuras) {

    imagen.src = imagenSrc;
    titulo.textContent = nombre;
    texto.textContent = descripcion;

    lista.innerHTML = "";

    estructuras.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;

        li.onclick = function () {
            alert("Pulsaste: " + item);
        };

        lista.appendChild(li);

    });

}

document.getElementById("oseo").onclick = () => {

    mostrarSistema(
        "assets/images/esqueleto.png",
        "Sistema Óseo",
        "Sistema formado por los huesos del caballo.",
        [
            "🦴 Cráneo",
            "🦴 Mandíbula",
            "🦴 Vértebras cervicales"
        ]
    );

};
