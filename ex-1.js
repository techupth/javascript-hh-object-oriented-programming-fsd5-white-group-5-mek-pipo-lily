class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log("Notification has been sent to " + this.receiver);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
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
