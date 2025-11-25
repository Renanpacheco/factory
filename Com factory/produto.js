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

module.exports = {
  EmailNotification,
  SMSNotification,
  PushNotification,
};
