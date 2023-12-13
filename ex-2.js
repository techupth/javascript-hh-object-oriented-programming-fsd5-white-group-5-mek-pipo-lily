class Notification {
  constructor(notificationID, createdTime, content, receiver) {
    this.notificationID = notificationID;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    return `Notification has been sent to ${this.receiver}`;
  }
}

class EmailNotification extends Notification {
  constructor(notificationID, createdTime, content, receiver) {
    super(notificationID, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationID, createdTime, content, receiver) {
    super(notificationID, createdTime, content, receiver);
  }
}

const mailNoti = new EmailNotification(1, 1, 1, "Oliver");
const smsNoti = new SMSNotification(1, 1, 1, "John");

console.log(mailNoti.send());
console.log(smsNoti.send());
