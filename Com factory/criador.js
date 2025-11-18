class NotificationCreator {
  createNotifier() {
    throw new Error("createNotifier() deve ser implementado");
  }

  send(message) {
    const notifier = this.createNotifier(); // Factory Method
    notifier.send(message);
  }
}
