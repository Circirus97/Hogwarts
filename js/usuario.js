let estudianteHogwarts = {
    nombre: "",
    edad: "",
    familia: {
        padre: "Lucius Black",
        madre: "Evelyn Green",
    },
    linaje: "",
    casa: "",
    animalPatronus: "",
    cualidades: "",
};

let seleccionCualidades = "";
let seleccionDeLinaje = "";
let descripcionCualidad;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("boton1").addEventListener("click", () => seleccionarBoton("boton1", "Valor, fuerza, audacia"));
    document.getElementById("boton2").addEventListener("click", () => seleccionarBoton("boton2"));
    document.getElementById("boton3").addEventListener("click", () => seleccionarBoton("boton3"));
    document.getElementById("boton4").addEventListener("click", () => seleccionarBoton("boton4"));

    document.getElementById("seleccionLinaje").addEventListener("change", function () {
        seleccionDeLinaje = this.value;
        console.log(`Su linaje es: ${seleccionDeLinaje}`);
    });

    document.getElementById("botonRegistro").addEventListener("click", () => almacenarDatosEstudiante());
});

function seleccionarBoton(botonId, cualidad) {
    seleccionCualidades = botonId;
    descripcionCualidad = cualidad;
    console.log("Botón seleccionado: " + seleccionCualidades);
}

function almacenarDatosEstudiante() {
    estudianteHogwarts.nombre = document.getElementById("nombre").value;
    estudianteHogwarts.edad = document.getElementById("edad").value;
    estudianteHogwarts.linaje = seleccionDeLinaje;
    estudianteHogwarts.cualidades = seleccionCualidades;

    if (seleccionCualidades === "boton1" && (seleccionDeLinaje === "mestizo"
        || seleccionDeLinaje === "muggle" || seleccionDeLinaje === "sangrePura")) {

        estudianteHogwarts.casa = "Gryffindor"
    }

    else if (seleccionCualidades === "boton2" && (seleccionDeLinaje === "mestizo"
        || seleccionDeLinaje === "muggle")) {

        estudianteHogwarts.casa = "Hufflepuff"
    }

    else if (seleccionCualidades === "boton3" && (seleccionDeLinaje === "mestizo"
        || seleccionDeLinaje === "muggle" || seleccionDeLinaje === "sangrePura")) {

        estudianteHogwarts.casa = "Ravenclaw"
    }

    else if (seleccionCualidades === "boton4" && seleccionDeLinaje === "sangrePura") {

        estudianteHogwarts.casa = "Slytherin"
    }

    let mensaje = document.getElementById("textoMensajeCasa");
    
    console.log("¡Bienvenido/a " + estudianteHogwarts.nombre + "\n \n" + "perteneces a la casa: " + estudianteHogwarts.casa + "!");
      
    mensaje.innerHTML = "¡Bienvenido/a " + estudianteHogwarts.nombre + "\n \n" + "perteneces a la casa: " + estudianteHogwarts.casa + "!";
    
    mostrar();
}

function mostrar() {
    let mensajeCasa = document.getElementById("mensajeCasa");

    mensajeCasa.style.display = 'flex';
    mensajeCasa.style.flexDirection = 'column';
    mensajeCasa.style.alignItems = 'center';

    informacionEstudiante()

}

function informacionEstudiante() {
    let propiedades = ["nombre", "edad", "linaje", "casa", "cualidades"];
    console.log(descripcionCualidad);
  
    
    for (let propiedad of propiedades) {
        let valor = estudianteHogwarts[propiedad];

        let elemento = document.getElementById(`${propiedad}Estudiante`);
        console.log(valor);
        console.log(elemento);

        if(valor == "boton1"){
            elemento.innerHTML = `${propiedad}: ${descripcionCualidad}`;
        } 

        if (elemento) {   
             
            elemento.innerHTML = `${propiedad}: ${valor}`;
        }


    }
}



