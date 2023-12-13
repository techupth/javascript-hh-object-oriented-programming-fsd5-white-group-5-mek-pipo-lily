class EmailNotification {
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

class SMSNotification extends EmailNotification {
  constructor(notificationID, createdTime, content, phoneNumber) {
    super(notificationID, createdTime, content);
    this.phoneNumber = phoneNumber;
  }

  send() {
    return `Notification has been sent to ${this.phoneNumber}`;
  }
}

const mailNoti = new EmailNotification(1, 1, 1, "pipo@gmail.com");
console.log(mailNoti.send());

const smsNoti = new SMSNotification(1, 1, 1, "061-555-xxxx");
console.log(smsNoti.send());
