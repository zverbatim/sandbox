import {ChatConnector, Prompts, UniversalBot, EntityRecognizer} from 'botbuilder'

export const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})


/**
 * The bot makes a reservations and end it with a thank you message.
 * Takes cancel and stop message from user after filling the reservation form
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
    Prompts.text(session, "Who's name will this reservation be under?");
  },
  (session, results) => {
    if (results.response) {
      session.dialogData.reservationName = results.response
      const msg = `Reservation confirmed. Reservation details: <br/>Date/Time: ${session.dialogData.reservationDate} <br/>Reservation name: ${session.dialogData.reservationName}`
      session.endConversation(msg)
    }
  }
]).endConversationAction(
  "endOrderDinner", "Ok. Goodbye.",
  {
    matches: /^cancel$|^goodbye$/i,
    confirmPrompt: "This will cancel your order. Are you sure?"
  }
);