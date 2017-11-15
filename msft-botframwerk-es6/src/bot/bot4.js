import {ChatConnector, Prompts, UniversalBot, EntityRecognizer, ListStyle} from 'botbuilder'

export const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})


/**
 * The bot takes a choice from a defined list
 * @type {UniversalBot}
 */
let bot = new UniversalBot(connector, [
  (session) => session.beginDialog('root'),
  (session) => session.send('Thank you!')
])

bot.dialog('root', [
// This is a dinner reservation bot that uses a waterfall technique to prompt users for input.
  (session) => {
    session.send("Welcome to the bot:");
    Prompts.choice(session, "Which color?", "red|green|blue", {listStyle: ListStyle.button});
  },
  (session, results, next) => {
    if (results.response) {
      session.dialogData.color = results.response.entity;
      session.send(`Your choice ${session.dialogData.color}`)
    }
    next()
  }]
)