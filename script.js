const imagen = document.getElementById("imagenCaballo");
const titulo = document.querySelector("#panel h2");
const texto = document.querySelector("#panel p");

document.getElementById("caballo").onclick = () => {

    imagen.src = "assets/caballo.png";

    titulo.textContent = "Caballo";

    texto.textContent =
    "Vista externa del caballo. Desde aquí podrás acceder a todos los sistemas anatómicos.";

};

document.getElementById("oseo").onclick = () => {

    imagen.src = "assets/esqueleto.png";

    titulo.textContent = "Sistema Óseo";

    texto.textContent =
    "Visualiza todos los huesos del caballo y consulta la información anatómica de cada uno.";

};

document.getElementById("muscular").onclick = () => {

    imagen.src = "assets/musculos.png";

    titulo.textContent = "Sistema Muscular";

    texto.textContent =
    "Explora los principales músculos superficiales y profundos del caballo.";

};

document.getElementById("organos").onclick = () => {

    imagen.src = "assets/organos.png";

    titulo.textContent = "Órganos";

    texto.textContent =
    "Observa la ubicación de los órganos internos del caballo.";

};

document.getElementById("respiratorio").onclick = () => {

    imagen.src = "assets/respiratorio.png";

    titulo.textContent = "Sistema Respiratorio";

    texto.textContent =
    "Consulta la anatomía del sistema respiratorio equino.";

};

document.getElementById("nervioso").onclick = () => {

    imagen.src = "assets/nervioso.png";

    titulo.textContent = "Sistema Nervioso";

    texto.textContent =
    "Visualiza la distribución principal del sistema nervioso del caballo.";

};
