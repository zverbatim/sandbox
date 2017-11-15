import {ChatConnector, Prompts, UniversalBot, EntityRecognizer} from 'botbuilder'

export const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})


/**
 * The bot makes a reservations and end it with a thank you message
 * @type {UniversalBot}
 */
let bot = new UniversalBot(connector, [
  (session) => session.beginDialog('root'),
  (session) => session.send('Thank you!')
])

bot.dialog('root', [
// This is a dinner reservation bot that uses a waterfall technique to prompt users for input.
  (session) => {
    session.send("Welcome to the dinner reservation.");
    Prompts.time(session, "Please provide a reservation date and time (e.g.: June 6th at 5pm)");
  },
  (session, results) => {
    session.dialogData.reservationDate = EntityRecognizer.resolveTime([results.response]);
    Prompts.text(session, "How many people are in your party?");
  },
  (session, results) => {
    session.dialogData.partySize = results.response;
    Prompts.text(session, "Who's name will this reservation be under?");
  },
  (session, results) => {
    session.dialogData.reservationName = results.response;

    // Process request and display reservation details
    session.send(`Reservation confirmed. Reservation details: <br/>Date/Time: ${session.dialogData.reservationDate} <br/>Party size: ${session.dialogData.partySize} <br/>Reservation name: ${session.dialogData.reservationName}`);
    session.endDialog();
  }
])