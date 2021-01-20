//require('dotenv').config();

module.exports = {
  serverRuntimeConfig: {
    VAR_SERVER: 'on server'
  },
  publicRuntimeConfig: {      
    STANDALONE: process.env.STANDALONE,  
    API_ECHO_URL: process.env.API_ECHO_URL,  
  }
}
