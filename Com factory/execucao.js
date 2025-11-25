const {
  EmailNotificationCreator,
  SMSNotificationCreator,
  PushNotificationCreator,
} = require("./criadorConcreto");

const emailFactory = new EmailNotificationCreator();
emailFactory.send("Olá usuário!");

const smsFactory = new SMSNotificationCreator();
smsFactory.send("Seu código é 1234");

const pushFactory = new PushNotificationCreator();
pushFactory.send("Você ganhou XP!");
