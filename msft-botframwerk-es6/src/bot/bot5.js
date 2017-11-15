import {
  ChatConnector,
  UniversalBot,
  Message,
  HeroCard,
  CardImage,
  CardAction,
  AttachmentLayout
} from 'botbuilder'

export const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

const trips = [
  {
    "title": "Trip on Mars",
    "subtitle": "On of kind trip certified by Elon",
    "text": "$8,999",
    "url": 'https://source.unsplash.com/WLUHO9A_xik/300x150',
    "buttonsDescription": "reserve the Mars trip",
    "buttonTitle": "Reserve"
  },
  {
    "title": "Love the Alps",
    "subtitle": "Backpacking trip in Austria",
    "text": "$899",
    "url": 'https://source.unsplash.com/uSFOwYo1qEw/300x150',
    "buttonsDescription": "book the alps trip",
    "buttonTitle": "Book"
  },
  {
    "title": "Harvest in France",
    "subtitle": "Enjoy the scenery with a class of wine",
    "text": "$999",
    "url": 'https://source.unsplash.com/bvZkWfZDWjM/300x150',
    "buttonsDescription": "book the france trip",
    "buttonTitle": "Book"
  }
]


/**
 * Display a card
 * @type {UniversalBot}
 */
let bot = new UniversalBot(connector, (session) => {
  session.send("Ola, Type 'show trips' to see our current trips.")
})

bot.dialog('trip', function (session) {
  const msg = new Message(session);
  msg.attachmentLayout(AttachmentLayout.carousel)
  msg.attachments(trips.map(t =>
    new HeroCard(session)
      .title(t.title)
      .subtitle(t.subtitle)
      .text(t.text)
      .images([CardImage.create(session, t.url)])
      .buttons([
        CardAction.imBack(session, t.buttonsDescription, t.buttonTitle)
      ])
  ));
  session.send(msg).endDialog();
}).triggerAction({matches: /^(show|list)/i});