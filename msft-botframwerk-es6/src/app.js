import {createServer} from 'restify'
import {connector} from './bot/bot4'

// Setup Restify Server
const server = createServer()
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url)
})

// Listen for messages from users
server.post('/api/messages', connector.listen())
