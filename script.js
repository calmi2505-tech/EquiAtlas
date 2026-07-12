const imagen = document.getElementById("imagenCaballo");
const titulo = document.querySelector("#panel h2");
const texto = document.getElementById("descripcion");
const lista = document.getElementById("listaEstructuras");

function mostrarSistema(imagenSrc, nombre, descripcion, estructuras) {

    imagen.src = imagenSrc;
    titulo.textContent = nombre;
    texto.innerHTML = descripcion;

    lista.innerHTML = "";

    estructuras.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;
        li.style.cursor = "pointer";

        li.onclick = () => {

            switch(item){

                case "🦴 Cráneo":

                    titulo.textContent = "🦴 Cráneo";

                    texto.innerHTML = `
<b>Ubicación:</b> Cabeza.<br><br>

<b>Función:</b> Protege el encéfalo y sostiene las estructuras de la cara.<br><br>

<b>Articula con:</b> Mandíbula y primeras vértebras cervicales.
`;

                break;

                case "🦴 Mandíbula":

                    titulo.textContent = "🦴 Mandíbula";

                    texto.innerHTML = `
<b>Ubicación:</b> Parte inferior de la cabeza.<br><br>

<b>Función:</b> Permite la masticación y soporta los dientes inferiores.<br><br>

<b>Articula con:</b> Cráneo.
`;

                break;

                default:

                    titulo.textContent = item;

                    texto.innerHTML =
                    "La información anatómica de esta estructura estará disponible próximamente.";

            }

        };

        lista.appendChild(li);

    });

}

document.getElementById("caballo").onclick = () => {

    mostrarSistema(
        "assets/images/caballo.png",
        "Caballo",
        "Vista externa del caballo.",
        [
            "Cabeza",
            "Cuello",
            "Tronco",
            "Miembros anteriores",
            "Miembros posteriores",
            "Cola"
        ]
    );

};

document.getElementById("oseo").onclick = () => {

    mostrarSistema(
        "assets/images/esqueleto.png",
        "Sistema Óseo",
        "Sistema formado por los huesos del caballo.",
        [
            "🦴 Cráneo",
            "🦴 Mandíbula",
            "🦴 Vértebras cervicales",
            "🦴 Escápula",
            "🦴 Húmero",
            "🦴 Radio",
            "🦴 Carpo",
            "🦴 Metacarpo",
            "🦴 Pelvis",
            "🦴 Fémur",
            "🦴 Tibia",
            "🦴 Tarso"
        ]
    );

};

document.getElementById("muscular").onclick = () => {

    mostrarSistema(
        "assets/images/musculos.png",
        "Sistema Muscular",
        "Principales músculos del caballo.",
        [
            "Trapecio",
            "Braquiocefálico",
            "Glúteo medio",
            "Bíceps femoral"
        ]
    );

};

document.getElementById("organos").onclick = () => {

    mostrarSistema(
        "assets/images/organos.png",
        "Órganos",
        "Órganos internos del caballo.",
        [
            "Corazón",
            "Pulmones",
            "Hígado",
            "Estómago",
            "Intestino"
        ]
    );

};

document.getElementById("respiratorio").onclick = () => {

    mostrarSistema(
        "assets/images/respiratorio.png",
        "Sistema Respiratorio",
        "Órganos encargados de la respiración.",
        [
            "Nariz",
            "Laringe",
            "Tráquea",
            "Pulmones"
        ]
    );

};

document.getElementById("nervioso").onclick = () => {

    mostrarSistema(
        "assets/images/nervioso.png",
        "Sistema Nervioso",
        "Sistema nervioso central y periférico.",
        [
            "Encéfalo",
            "Médula espinal",
            "Nervios craneales",
            "Nervios espinales"
        ]
    );

};
