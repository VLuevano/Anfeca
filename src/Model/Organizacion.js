class Organizacion {
    constructor(idOrganizacion, nombreOrganizacion, descripcionOrganizacion, enlaceOrganizacion) {
      this.idOrganizacion = idOrganizacion;
      this.nombreOrganizacion = nombreOrganizacion;
      this.descripcionOrganizacion = descripcionOrganizacion;
      this.enlaceOrganizacion = enlaceOrganizacion;
    }
  
    // Método para mostrar la información de la organización
    mostrarInfoOrganizacion() {
      console.log(`ID de la organización: ${this.idOrganizacion}`);
      console.log(`Nombre de la organización: ${this.nombreOrganizacion}`);
      console.log(`Descripción de la organización: ${this.descripcionOrganizacion}`);
      console.log(`Enlace de la organización: ${this.enlaceOrganizacion}`);
    }
  }
  
  /* Ejemplo de uso:
  const miOrganizacion = new Organizacion(1, "Mi Organización", "Una descripción de la organización...", "http://www.miorganizacion.com");
  miOrganizacion.mostrarInfoOrganizacion();  */