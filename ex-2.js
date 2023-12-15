class Notification {
  constructor(notificationId, createdTime, content) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
  }

  send() {
    console.log("Notification has been sent to " + this.receiver);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }

  send() {
    console.log("Notification has been sent to " + this.phoneNumber);
  }
}

const emailNotification = new EmailNotification(
  1,
  "14-Dec-2023 4:00 PM",
  "Hello, How are you?",
  "Parksunghoon@belift.com"
);
const smsNotification = new SMSNotification(
  1,
  "14-Dec-2023 4:00 PM",
  "Hello, How are you?",
  "XXX-XXXXXXXX"
);
emailNotification.send();
smsNotification.send();
