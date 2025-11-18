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
