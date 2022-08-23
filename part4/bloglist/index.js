const app = require('./app') // the actual Express application
const http = require('http')
const logger = require('./utils/logger')


const PORT = 3003
const server = http.createServer(app)

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})