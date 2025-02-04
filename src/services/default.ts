import { twilioInstance } from "./twilio";

export async function defaultMessage(sendTo: string, name: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      contentSid: "HXfe862a2a0cc6b5b995dd647a9dbd641b",
      contentVariables: JSON.stringify({
        1: name,
      }),
      from: "whatsapp:+212717962498",
      to: sendTo,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function backToMenu(sendTo: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      contentSid: "HXe0fb83f9db3b003d8e51d6853328e0fc",
      from: "whatsapp:+212717962498",
      to: sendTo,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
