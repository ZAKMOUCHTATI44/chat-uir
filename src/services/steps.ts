import { backToMenu } from "./default";
import { twilioInstance } from "./twilio";

export async function step1(messageFrom: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      body: `L’Université Internationale de Rabat propose pour la rentrée universitaire 2024-2025, 
douze programmes de formation, ouverts aux branches de baccalauréats scientifiques, 
techniques, économiques et littéraires.

Selon le programme de formation choisi, le candidat doit répondre à des critères d’éligibilité, se présenter aux concours aux dates prévues et prendre connaissance des épreuves de concours.`,
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      // Waiting 3 sec then send Back to Menu

      setTimeout(() => {
        backToMenu(messageFrom);
      }, 3000);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

//
export async function step2(messageFrom: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      contentSid: "HXe38138eb8a228cfb8f8252d369817893",
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      // Waiting 3 sec then send Back to Menu

      setTimeout(() => {
        backToMenu(messageFrom);
      }, 3000);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// HX4100f83d52e35517a19ab5e0b37b9ba4

export async function step3(messageFrom: string) {
  const client = await twilioInstance();
  client.messages
    .create({
      contentSid: "HX4100f83d52e35517a19ab5e0b37b9ba4",
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      // Waiting 3 sec then send Back to Menu

      setTimeout(() => {
        backToMenu(messageFrom);
      }, 3000);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function step4(messageFrom: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      body: `L’UIR est dotée d’un département promotion qui se charge d’orienter les étudiants et de répondre à leurs interrogations.

  
Veuillez cliquer sur le lien çi-dessous pour en savoir plus : 
https://tawjihi.uir.ac.ma/`,
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      // Waiting 3 sec then send Back to Menu

      setTimeout(() => {
        backToMenu(messageFrom);
      }, 3000);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function step5(messageFrom: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      body: `Afin de candidater à l'UIR, l'étudiant devrait procéder à la création de son << Compte candidat » qui est un espace dédié pour la procédure de candidature, suivi de dossier, paiement des frais de concours et téléchargement des convocations.

Allez sur : https://candidature.uir.ac.ma/`,
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      // Waiting 3 sec then send Back to Menu

      setTimeout(() => {
        backToMenu(messageFrom);
      }, 3000);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function step6(messageFrom: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      contentSid: "HX9687cbc7abb5440e460fd9bfc1fe8413",
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
export async function getMastersLandingPage(messageFrom: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      body: `Veuillez cliquer sur le lien ci-dessous 

https://masters.uirservices.ma`,
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      // Waiting 3 sec then send Back to Menu

      setTimeout(() => {
        backToMenu(messageFrom);
      }, 3000);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getbacheliersLandingPage(messageFrom: string) {
  const client = await twilioInstance();

  client.messages
    .create({
      body: `Veuillez cliquer sur le lien ci-dessous 

https://bacheliers.uirservices.ma`,
      from: "whatsapp:+212717962498",
      to: messageFrom,
    })
    .then((res) => {
      // Waiting 3 sec then send Back to Menu

      setTimeout(() => {
        backToMenu(messageFrom);
      }, 3000);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
