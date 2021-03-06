import {ChatConnector, Prompts, UniversalBot} from 'botbuilder'



// Create chat connector for communicating with the Bot Framework Service
export const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

// This bot ensures user's profile is up to date.
let bot = new UniversalBot(connector, [
  (session) => session.beginDialog('ensureProfile', session.userData.profile),
  (session, results) => {
    session.userData.profile = results.response
    session.send(`Hello ${session.userData.profile.name}! I love ${session.userData.profile.company}!`)
  }
])

const name = (session, args, next) => {
  // Set the profile or create the object.
  session.dialogData.profile = args || {}

  if (!session.dialogData.profile.name) {
    Prompts.text(session, "What's your name?")
  } else {
    next()
  }
}

const company = (session, results, next) => {
  if (results.response) {
    session.dialogData.profile.name = results.response
  }

  if (!session.dialogData.profile.company) {
    Prompts.text(session, "What company do you work for?")
  } else {
    next()
  }
}

const end = (session, results) => {
  if (results.response) {
    session.dialogData.profile.company = results.response
  }
  session.endDialogWithResult({response: session.dialogData.profile})
}

bot.dialog('ensureProfile', [name, company, end])