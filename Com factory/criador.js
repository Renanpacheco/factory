class NotificationCreator {
  createNotifier() {
    throw new Error("createNotifier() deve ser implementado");
  }

  send(message) {
    const notifier = this.createNotifier();
    notifier.send(message);
  }
}

module.exports = NotificationCreator;
