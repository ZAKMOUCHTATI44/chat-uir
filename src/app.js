
const twilio = require('twilio');

const client = new twilio("ACc8422137221a13b2b611a239ed56fa67", "32bda0baed9bc7b198abadfff4556ad2");

client.messages
  .create({
    contentSid: "HXa599da158f77bf26cabc227becf906d8",
    from: "whatsapp:+212717962498",
    // contentVariables: JSON.stringify({
    //   1: "Name",
    // }),
    to: "whatsapp:+212621586010",
  })
  .then((message) => console.log(message.sid));
