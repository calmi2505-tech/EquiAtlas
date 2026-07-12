li.onclick = () => {

    switch(item){

        case "🦴 Cráneo":
            imagen.src = "assets/images/craneo.png";
            titulo.innerHTML = "🦴 Cráneo";
            texto.innerHTML = `
<b>Ubicación:</b> Cabeza.<br><br>
<b>Función:</b> Protege el encéfalo y sostiene las estructuras de la cara.<br><br>
<b>Articula con:</b> Mandíbula y primeras vértebras cervicales.
`;
        break;

        case "🦴 Mandíbula":
            imagen.src = "assets/images/mandibula.png";
            titulo.innerHTML = "🦴 Mandíbula";
            texto.innerHTML = `
<b>Ubicación:</b> Parte inferior de la cabeza.<br><br>
<b>Función:</b> Permite la masticación y soporta los dientes inferiores.<br><br>
<b>Articula con:</b> Cráneo.
`;
        break;

        case "🦴 Vértebras cervicales":
            imagen.src = "assets/images/vertebras-cervicales.png";
            titulo.innerHTML = "🦴 Vértebras cervicales";
            texto.innerHTML = `
<b>Ubicación:</b> Cuello.<br><br>
<b>Función:</b> Sostienen la cabeza y permiten el movimiento del cuello.<br><br>
<b>Cantidad:</b> 7 vértebras.
`;
        break;

        case "🦴 Escápula":
            imagen.src = "assets/images/escapula.png";
            titulo.innerHTML = "🦴 Escápula";
            texto.innerHTML = `
<b>Ubicación:</b> Hombro.<br><br>
<b>Función:</b> Une el miembro anterior con el tronco.
`;
        break;

        case "🦴 Húmero":
            imagen.src = "assets/images/humero.png";
            titulo.innerHTML = "🦴 Húmero";
            texto.innerHTML = `
<b>Ubicación:</b> Brazo.<br><br>
<b>Función:</b> Une la escápula con el radio.
`;
        break;

        case "🦴 Radio":
            imagen.src = "assets/images/radio.png";
            titulo.innerHTML = "🦴 Radio";
            texto.innerHTML = `
<b>Ubicación:</b> Antebrazo.<br><br>
<b>Función:</b> Soporta gran parte del peso del miembro anterior.
`;
        break;

        case "🦴 Carpo":
            imagen.src = "assets/images/carpo.png";
            titulo.innerHTML = "🦴 Carpo";
            texto.innerHTML = `
<b>Ubicación:</b> Rodilla del miembro anterior.<br><br>
<b>Función:</b> Permite la flexión y extensión de la articulación.
`;
        break;

        case "🦴 Metacarpo":
            imagen.src = "assets/images/metacarpo.png";
            titulo.innerHTML = "🦴 Metacarpo";
            texto.innerHTML = `
<b>Ubicación:</b> Debajo del carpo.<br><br>
<b>Función:</b> Transmite el peso hacia el casco.
`;
        break;

        case "🦴 Pelvis":
            imagen.src = "assets/images/pelvis.png";
            titulo.innerHTML = "🦴 Pelvis";
            texto.innerHTML = `
<b>Ubicación:</b> Cadera.<br><br>
<b>Función:</b> Une la columna con los miembros posteriores.
`;
        break;

        case "🦴 Fémur":
            imagen.src = "assets/images/femur.png";
            titulo.innerHTML = "🦴 Fémur";
            texto.innerHTML = `
<b>Ubicación:</b> Muslo.<br><br>
<b>Función:</b> Principal hueso del miembro posterior.
`;
        break;

        case "🦴 Tibia":
            imagen.src = "assets/images/tibia.png";
            titulo.innerHTML = "🦴 Tibia";
            texto.innerHTML = `
<b>Ubicación:</b> Pierna.<br><br>
<b>Función:</b> Soporta el peso entre el fémur y el tarso.
`;
        break;

        case "🦴 Tarso":
            imagen.src = "assets/images/tarso.png";
            titulo.innerHTML = "🦴 Tarso";
            texto.innerHTML = `
<b>Ubicación:</b> Corvejón.<br><br>
<b>Función:</b> Permite la locomoción y absorbe impactos.
`;
        break;

    }

};
