class TemaInteractivo {
    constructor(idTema, tituloTema, contenidoTema, categoriaTema) {
        this.idTema = idTema;
        this.tituloTema = tituloTema;
        this.contenidoTema = contenidoTema;
        this.categoriaTema = categoriaTema;
    }

    // Setters y Getters
    setIdTema(idTema) {
        this.idTema = idTema;
    }

    setTituloTema(tituloTema) {
        this.tituloTema = tituloTema;
    }

    setContenidoTema(contenidoTema) {
        this.contenidoTema = contenidoTema;
    }

    setCategoriaTema(categoriaTema) {
        this.categoriaTema = categoriaTema;
    }

    getIdTema() {
        return this.idTema;
    }

    getTituloTema() {
        return this.tituloTema;
    }

    getContenidoTema() {
        return this.contenidoTema;
    }

    getCategoriaTema() {
        return this.categoriaTema;
    }

    // Métodos adicionales
    mostrarInformacion() {
        console.log(`ID del tema: ${this.idTema}`);
        console.log(`Título del tema: ${this.tituloTema}`);
        console.log(`Contenido del tema: ${this.contenidoTema}`);
        console.log(`Categoría del tema: ${this.categoriaTema}`);
    }

    mostrarResumen() {
        console.log(`Resumen del tema "${this.tituloTema}": ...`);
        // Aquí puedes implementar la lógica para mostrar un resumen del contenido del tema
    }

    mostrarHistorial() {
        console.log(`Historial del tema "${this.tituloTema}": ...`);
        // Aquí puedes implementar la lógica para mostrar el historial de cambios del tema
    }

    consultarTema(tituloTema) {
        console.log(`Consultando el tema "${tituloTema}"...`);
        // Aquí puedes implementar la lógica para buscar y mostrar información sobre el tema
    }

    comprarTema(idTema, sistemaOperativo) {
        if (this.idTema === idTema && this.sistemaOperativo === sistemaOperativo) {
          console.log(`Tema "${this.tituloTema}" comprado correctamente para el sistema operativo ${this.sistemaOperativo}`);
          return true;
        } else {
          console.log(`No se pudo comprar el tema "${this.tituloTema}" para el sistema operativo ${sistemaOperativo}`);
          return false;
        }
      }
}