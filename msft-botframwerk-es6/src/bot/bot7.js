import {
  ChatConnector,
  UniversalBot,
  Message,
  SuggestedActions,
  CardAction
} from 'botbuilder'

export const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

/**
 * Suggested actions displayed as horizontal buttons
 */
let bot = new UniversalBot(connector, (session) => {
  const msg = new Message(session)
    .text("Thank you for expressing interest in our premium golf shirt! What color of shirt would you like?")
    .suggestedActions(
      SuggestedActions.create(
        session, [
          CardAction.imBack(session, "productId=1&color=green", "Green"),
          CardAction.imBack(session, "productId=1&color=blue", "Blue"),
          CardAction.imBack(session, "productId=1&color=red", "Red")
        ]
      ));
  session.send(msg);
})
