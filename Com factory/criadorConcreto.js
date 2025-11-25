const NotificationCreator = require("./criador");
const {
  EmailNotification,
  SMSNotification,
  PushNotification,
} = require("./produto");

class EmailNotificationCreator extends NotificationCreator {
  createNotifier() {
    return new EmailNotification();
  }
}

class SMSNotificationCreator extends NotificationCreator {
  createNotifier() {
    return new SMSNotification();
  }
}

class PushNotificationCreator extends NotificationCreator {
  createNotifier() {
    return new PushNotification();
  }
}

module.exports = {
  EmailNotificationCreator,
  SMSNotificationCreator,
  PushNotificationCreator,
};
