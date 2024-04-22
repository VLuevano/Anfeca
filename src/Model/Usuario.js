class Usuario {
    constructor(nombreUsuario, correoUsuario, contrasenaUsuario, sexoUsuario, avatarUsuario, fechaNacimientoUsuario) {
      this.idUsuario = 0;
      this.nombreUsuario = nombreUsuario
      this.correoUsuario = correoUsuario
      this.contrasenaUsuario = contrasenaUsuario
      this.sexoUsuario = sexoUsuario
      this.avatarUsuario = avatarUsuario;
      this.fechaNacimientoUsuario = fechaNacimientoUsuario;
    }
  
    // Setters
    setIdUsuario(idUsuario) {
      this.idUsuario = idUsuario;
    }
  
    setNombreUsuario(nombreUsuario) {
      this.nombreUsuario = nombreUsuario;
    }
  
    setCorreoUsuario(correoUsuario) {
      this.correoUsuario = correoUsuario;
    }
  
    setContrasenaUsuario(contrasenaUsuario) {
      this.contrasenaUsuario = contrasenaUsuario;
    }
  
    setSexoUsuario(sexoUsuario) {
      this.sexoUsuario = sexoUsuario;
    }
  
    setAvatarUsuario(avatarUsuario) {
      this.avatarUsuario = avatarUsuario;
    }
  
    setFechaNacimientoUsuario(fechaNacimientoUsuario) {
      this.fechaNacimientoUsuario = fechaNacimientoUsuario;
    }
  
    // Getters
    getIdUsuario() {
      return this.idUsuario;
    }
  
    getNombreUsuario() {
      return this.nombreUsuario;
    }
  
    getCorreoUsuario() {
      return this.correoUsuario;
    }
  
    getContrasenaUsuario() {
      return this.contrasenaUsuario;
    }
  
    getSexoUsuario() {
      return this.sexoUsuario;
    }
  
    getAvatarUsuario() {
      return this.avatarUsuario;
    }
  
    getFechaNacimientoUsuario() {
      return this.fechaNacimientoUsuario;
    }
  
    // Métodos adicionales
    iniciarSesion(metodoInicioSesion) {
      // Lógica para iniciar sesión
      return true; // Supongamos que siempre inicia sesión correctamente
    }
  
    crearCuenta(metodoRegistro) {
      // Lógica para crear una cuenta
      return true; // Supongamos que siempre se crea la cuenta correctamente
    }
  
    recuperarContrasena(correoUsuario) {
      // Lógica para recuperar la contraseña
      return true; // Supongamos que siempre se recupera la contraseña correctamente
    }
  
    validarCodigoVerificacion(codigoVerificacion) {
      // Lógica para validar el código de verificación
      return true; // Supongamos que siempre se valida correctamente
    }
  
    establecerNuevaContraseña(nuevaContraseñaUsuario) {
      // Lógica para establecer una nueva contraseña
      return true; // Supongamos que siempre se establece la nueva contraseña correctamente
    }
  
    mostrarMenu() {
      // Lógica para mostrar el menú (puede variar según la interfaz de usuario)
    }
  
    modificarPerfil(idUsuario) {
      // Lógica para modificar el perfil
      return true; // Supongamos que siempre se modifica el perfil correctamente
    }
  }  