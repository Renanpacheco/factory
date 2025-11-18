// Produtos concretos
class EmailNotification {
  send(message) {
    console.log(`Enviando EMAIL: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`Enviando SMS: ${message}`);
  }
}

class PushNotification {
  send(message) {
    console.log(`Enviando PUSH: ${message}`);
  }
}

// Código que decide o tipo e instancia diretamente
function sendNotification(type, message) {
  let notifier;

  if (type === "email") {
    notifier = new EmailNotification();
  } else if (type === "sms") {
    notifier = new SMSNotification();
  } else if (type === "push") {
    notifier = new PushNotification();
  } else {
    throw new Error("Tipo inválido");
  }

  notifier.send(message);
}

// Uso
sendNotification("email", "Olá usuário!");
sendNotification("sms", "Seu código é 1234");
sendNotification("push", "Você ganhou XP!");
