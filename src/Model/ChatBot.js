class Chatbot {
    constructor() {
      this.entradaUsuario = "";
    }
  
    // Método para procesar la entrada del usuario
    procesarEntrada(entradaUsuario) {
      this.entradaUsuario = entradaUsuario;
    }
  
    // Método para generar una respuesta basada en la entrada del usuario
    generarRespuesta() {
      // Aquí puedes implementar la lógica para generar la respuesta basada en la entrada del usuario
      // Por ahora, vamos a devolver una respuesta genérica
      return "¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?";
    }
  }
  
  /* Ejemplo de uso:
  const chatbot = new Chatbot();
  chatbot.procesarEntrada("Hola");
  const respuesta = chatbot.generarRespuesta();
  console.log(respuesta); // Debería mostrar: ¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?*/