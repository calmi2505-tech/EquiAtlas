const imagen = document.getElementById("imagenCaballo");
const titulo = document.querySelector("#panel h2");
const texto = document.querySelector("#panel p");

function cambiarSistema(imagenSrc, nombre, descripcion) {

    imagen.src = imagenSrc;
    titulo.textContent = nombre;
    texto.textContent = descripcion;

}

document.getElementById("caballo").addEventListener("click", () => {

    cambiarSistema(
        "assets/images/caballo.png",
        "Caballo",
        "Vista externa del caballo. Desde aquí podrás acceder a todos los sistemas anatómicos."
    );

});

document.getElementById("oseo").addEventListener("click", () => {

    cambiarSistema(
        "assets/images/esqueleto.png",
        "Sistema Óseo",
        "Visualiza todos los huesos del caballo y consulta información detallada de cada uno."
    );

});

document.getElementById("muscular").addEventListener("click", () => {

    cambiarSistema(
        "assets/images/musculos.png",
        "Sistema Muscular",
        "Explora los principales músculos del caballo y conoce su función."
    );

});

document.getElementById("organos").addEventListener("click", () => {

    cambiarSistema(
        "assets/images/organos.png",
        "Órganos",
        "Observa la ubicación de los órganos internos del caballo."
    );

});

document.getElementById("respiratorio").addEventListener("click", () => {

    cambiarSistema(
        "assets/images/respiratorio.png",
        "Sistema Respiratorio",
        "Conoce la anatomía del sistema respiratorio equino."
    );

});

document.getElementById("nervioso").addEventListener("click", () => {

    cambiarSistema(
        "assets/images/nervioso.png",
        "Sistema Nervioso",
        "Explora la distribución del sistema nervioso del caballo."
    );

});
