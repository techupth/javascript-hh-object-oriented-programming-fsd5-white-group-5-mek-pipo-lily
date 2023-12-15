class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(email) {
    console.log(`Notification has been sent to ${email}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send(phoneNumber) {
    console.log(`Notification has been sent to ${phoneNumber}`);
  }
}

const mailNotif = new EmailNotification();
const smsNotif = new SMSNotification();

mailNotif.send("mek@tumail.com");
smsNotif.send("0123456789");
