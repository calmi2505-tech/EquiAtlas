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

                    imagen.src = "assets/images/craneo.png";

                    titulo.textContent = "🦴 Cráneo";

                    texto.innerHTML = `
<b>Ubicación:</b> Cabeza.<br><br>

<b>Función:</b> Protege el encéfalo y sostiene las estructuras de la cara.<br><br>

<b>Articula con:</b> Mandíbula y primeras vértebras cervicales.
`;

                break;

                case "🦴 Mandíbula":

                    imagen.src = "assets/images/mandibula.png";

                    titulo.textContent = "🦴 Mandíbula";

                    texto.innerHTML = `
<b>Ubicación:</b> Parte inferior de la cabeza.<br><br>

<b>Función:</b> Permite la masticación y soporta los dientes inferiores.<br><br>

<b>Articula con:</b> Cráneo.
`;

                break;

                case "🦴 Vértebras cervicales":

                    imagen.src = "assets/images/vertebras-cervicales.png";

                    titulo.textContent = "🦴 Vértebras cervicales";

                    texto.innerHTML = `
<b>Ubicación:</b> Cuello.<br><br>

<b>Cantidad:</b> 7 vértebras.<br><br>

<b>Función:</b> Sostienen la cabeza y permiten el movimiento del cuello.
`;

                break;

                case "🦴 Escápula":

                    imagen.src = "assets/images/escapula.png";

                    titulo.textContent = "🦴 Escápula";

                    texto.innerHTML = `
<b>Ubicación:</b> Hombro.<br><br>

<b>Función:</b> Une el miembro anterior con el tronco.
`;

                break;

                case "🦴 Húmero":

                    imagen.src = "assets/images/humero.png";

                    titulo.textContent = "🦴 Húmero";

                    texto.innerHTML = `
<b>Ubicación:</b> Brazo.<br><br>

<b>Función:</b> Une la escápula con el radio.
`;

                break;

                case "🦴 Radio":

                    imagen.src = "assets/images/radio.png";

                    titulo.textContent = "🦴 Radio";

                    texto.innerHTML = `
<b>Ubicación:</b> Antebrazo.<br><br>

<b>Función:</b> Soporta gran parte del peso.
`;

                break;

                case "🦴 Carpo":

                    imagen.src = "assets/images/carpo.png";

                    titulo.textContent = "🦴 Carpo";

                    texto.innerHTML = `
<b>Ubicación:</b> Rodilla del miembro anterior.<br><br>

<b>Función:</b> Permite la flexión y extensión.
`;

                break;

                case "🦴 Metacarpo":

                    imagen.src = "assets/images/metacarpo.png";

                    titulo.textContent = "🦴 Metacarpo";

                    texto.innerHTML = `
<b>Ubicación:</b> Debajo del carpo.<br><br>

<b>Función:</b> Transmite el peso hacia el casco.
`;

                break;

                case "🦴 Pelvis":

                    imagen.src = "assets/images/pelvis.png";

                    titulo.textContent = "🦴 Pelvis";

                    texto.innerHTML = `
<b>Ubicación:</b> Cadera.<br><br>

<b>Función:</b> Une la columna con los miembros posteriores.
`;

                break;

                case "🦴 Fémur":

                    imagen.src = "assets/images/femur.png";

                    titulo.textContent = "🦴 Fémur";

                    texto.innerHTML = `
<b>Ubicación:</b> Muslo.<br><br>

<b>Función:</b> Principal hueso del miembro posterior.
`;

                break;

                case "🦴 Tibia":

                    imagen.src = "assets/images/tibia.png";

                    titulo.textContent = "🦴 Tibia";

                    texto.innerHTML = `
<b>Ubicación:</b> Pierna.<br><br>

<b>Función:</b> Soporta el peso entre el fémur y el tarso.
`;

                break;

                case "🦴 Tarso":

                    imagen.src = "assets/images/tarso.png";

                    titulo.textContent = "🦴 Tarso";

                    texto.innerHTML = `
<b>Ubicación:</b> Corvejón.<br><br>

<b>Función:</b> Permite la locomoción y absorbe impactos.
`;

                break;

                default:

                    imagen.src = "assets/images/esqueleto.png";

                    titulo.textContent = item;

                    texto.innerHTML = "Información disponible próximamente.";

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

    titulo.textContent = "Sistema Muscular";
    texto.innerHTML = "En desarrollo.";
    imagen.src = "assets/images/musculos.png";
    lista.innerHTML = "";

};

document.getElementById("organos").onclick = () => {

    titulo.textContent = "Órganos";
    texto.innerHTML = "En desarrollo.";
    imagen.src = "assets/images/organos.png";
    lista.innerHTML = "";

};

document.getElementById("respiratorio").onclick = () => {

    titulo.textContent = "Sistema Respiratorio";
    texto.innerHTML = "En desarrollo.";
    imagen.src = "assets/images/respiratorio.png";
    lista.innerHTML = "";

};

document.getElementById("nervioso").onclick = () => {

    titulo.textContent = "Sistema Nervioso";
    texto.innerHTML = "En desarrollo.";
    imagen.src = "assets/images/nervioso.png";
    lista.innerHTML = "";

};
