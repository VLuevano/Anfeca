class Pregunta {
    constructor(idPregunta, idTema, pregunta, respuestaCorrecta) {
        this.idPregunta = idPregunta;
        this.idTema = idTema;
        this.pregunta = pregunta;
        this.respuestaCorrecta = respuestaCorrecta;
    }

    // Setters y Getters
    setIdPregunta(idPregunta) {
        this.idPregunta = idPregunta;
    }

    setIdTema(idTema) {
        this.idTema = idTema;
    }

    setPregunta(pregunta) {
        this.pregunta = pregunta;
    }

    setRespuestaCorrecta(respuestaCorrecta) {
        this.respuestaCorrecta = respuestaCorrecta;
    }

    getIdPregunta() {
        return this.idPregunta;
    }

    getIdTema() {
        return this.idTema;
    }

    getPregunta() {
        return this.pregunta;
    }

    getRespuestaCorrecta() {
        return this.respuestaCorrecta;
    }

    // Métodos adicionales
    mostrarPregunta() {
        console.log(`Pregunta (${this.idPregunta}): ${this.pregunta}`);
    }

    verificarRespuesta(respuesta) {
        return respuesta === this.respuestaCorrecta;
    }
}

/* Ejemplo de uso:

const tema = new TemaInteractivo(1, "Introducción a JavaScript", "Contenido del tema...", "Programación");
tema.mostrarInformacion();

const pregunta = new Pregunta(1, 1, "¿Cuál es el lenguaje de programación de este tema?", "JavaScript");
pregunta.mostrarPregunta();
console.log(pregunta.verificarRespuesta("JavaScript")); // Devolverá true
console.log(pregunta.verificarRespuesta("Python")); // Devolverá false*/