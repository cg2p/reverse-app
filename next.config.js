require('dotenv').config();

console.log(process.env.STANDALONE)

module.exports = {
  publicRuntimeConfig: {
    STANDALONE: process.env.STANDALONE || 'yes',
    API_ECHO_URL: process.env.API_ECHO_URL,  
  }
}
