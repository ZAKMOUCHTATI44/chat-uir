import express, { Request, Response } from "express";
import { backToMenu, defaultMessage } from "./services/default";
import {
  getbacheliersLandingPage,
  getMastersLandingPage,
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
} from "./services/steps";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/chat-bot", (req: Request, res: Response) => {
  const message = req.body;

  console.log(message.ButtonPayload);
  if (message.MessageType) {
    switch (message.MessageType) {
      case "interactive":
        if (message.ListId === "menu-1") {
          step1(message.From);
        } else if (message.ListId === "menu-2") {
          step2(message.From);
        } else if (message.ListId === "menu-3") {
          step3(message.From);
        } else if (message.ListId === "menu-4") {
          step4(message.From);
        } else if (message.ListId === "menu-5") {
          step5(message.From);
        } else if (message.ListId === "menu-6") {
          step6(message.From);
        } else if (message.ButtonPayload === "defaultMenu") {
          backToMenu(message.From);
        } else if (message.ButtonPayload === "masters") {
          getMastersLandingPage(message.From);
        } else if (message.ButtonPayload === "bacheliers") {
          getbacheliersLandingPage(message.From);
        }
    }
  } else {
    defaultMessage(message.From, message.ProfileName);
  }

  res.send("hey");
});

app.listen(PORT, () => {
  console.log(`App Started ${PORT}`);
});
