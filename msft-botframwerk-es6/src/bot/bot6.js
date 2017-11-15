import {
  ChatConnector,
  UniversalBot,
} from 'botbuilder'

export const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

/**
 * Try ou the regex match pattern for triggering actions
 * - show
 * - buy
 * - clear
 * - total
 */
let bot = new UniversalBot(connector, (session) => {
  session.send("Hello world")
})

bot.dialog('tripShow', [
  session =>
    session.endDialog('__show__ trigger')
]).triggerAction({matches: /^(show|list|help)/i});


bot.dialog('buy', [
  session =>
    session.endDialog('__buy__ trigger')
]).triggerAction({matches: /(buy|add|book|reserve|)\s.*/i});

bot.dialog('total', [
  session => {
    session.endDialog('__total__ triggered')
  }]
).triggerAction({matches: /.*total.*/i})


bot.dialog('clear', [
  (session) => {
    session.endDialog('__clear__ triggered')
  }]
).triggerAction({matches: /clear/i})