
const twilio = require('twilio');

const client = new twilio("ACc8422137221a13b2b611a239ed56fa67", "e08da1f62fb7939f21ce122f81286b78");

client.messages
  .create({
    contentSid: "HX9687cbc7abb5440e460fd9bfc1fe8413",
    from: "whatsapp:+212717962498",
    // contentVariables: JSON.stringify({
    //   1: "Name",
    // }),
    to: "whatsapp:+212621586010",
  })
  .then((message) => console.log(message.sid));
