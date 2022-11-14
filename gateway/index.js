const gateway = require('fast-gateway')
const server = gateway({
  routes: [
  {
    prefix: '/product',
    target: 'http://127.0.0.1:3000'
  },

  {
    prefix: '/user',
    target: 'http://127.0.0.1:4002'
  },

  {
    prefix: '/order',
    target: 'http://127.0.0.1:5000'
  },
]
})

server.start(4444)