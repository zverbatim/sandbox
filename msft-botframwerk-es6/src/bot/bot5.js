import {
  ChatConnector,
  UniversalBot,
  Message,
  HeroCard,
  CardImage,
  CardAction,
  AttachmentLayout,
  Prompts,
  ListStyle
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
 * Work with cards to:
 * Done
 * - show the trips
 * - add to cart
 * - cancel the trips
 * - show the cart total
 *
 * Todo
 * - form to collect payment
 * - simulate interaction based of mocked api
 * @type {UniversalBot}
 */
let bot = new UniversalBot(connector, (session) => {
  session.send("Ola, Type 'show trips' to see our current trips.")
})

bot.dialog('tripShow', (session) => {
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
  session.sendTyping();
  session.send(msg).endDialog();
}).triggerAction({matches: /^(show|list|help)/i});


bot.dialog('tripChoice', [
  (session) => {
    const choices = trips[0].title + '|' + trips[1].title + '|' + trips[2].title
    Prompts.choice(session, "Which one?", choices, {listStyle: ListStyle.button});
  },
  (session, results) => {
    session.send(`You reservation choice is ${results.response.entity}`).endDialog()
  }
]).triggerAction({matches: /^(choice)/i})


bot.dialog('buy', [
  function (session, args, next) {
    // Get color and optional size from users utterance
    const utterance = args.intent.matched[0];
    const destination = /(mars|alps|france)/i.exec(utterance)[0];
    console.log('utterance: ', utterance)
    console.log('destination: ', destination)

    if (destination) {
      // Initialize cart item
      session.dialogData.item = {
        destination: destination,
        price: 25.0,
        qty: 1
      };
      next()
    } else {
      // Invalid product
      session.send("I'm sorry... That trip wasn't found.").endDialog();
    }
  },
  function (session, results) {
    const item = session.dialogData.item;

    // Add to cart
    if (!session.userData.cart) {
      session.userData.cart = [];
    }
    session.userData.cart.push(item);
    // Send confirmation to users
    session.send(`You cart has ${session.userData.cart.length} trips`)
    session.send("A trip to %(destination)s has been added to your cart.", item).endDialog();
  }
]).triggerAction({matches: /(buy|add|book|reserve|)\s.*/i});

bot.dialog('total', [
  (session) => {
    if (session.userData.cart.length > 0) {
      const total = session.userData.cart.reduce((a, b) => a + b.price, 0)
      session.endDialog(`Your cart has ${session.userData.cart.length} trip.<br>Your total is ${total} USD`)
    }
    else
      session.endDialog('Your cart is empty')
  }]
).triggerAction({matches: /total/i})


bot.dialog('clear', [
  (session) => {
    session.userData.cart = []
    session.endDialog('All your trips have been canceled')
  }]
).triggerAction({matches: /clear/i})