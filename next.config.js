require('dotenv').config();

module.exports = {
  publicRuntimeConfig: {
    STANDALONE: process.env.STANDALONE || 'yes',
    API_ECHO_URL: process.env.API_ECHO_URL,  
  }
}
