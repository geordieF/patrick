const express = require('express');
const subdomain = require('express-subdomain');
const app = express();
const user = require('./classes/user');
const router = express.Router()
global.path == __dirname
app.listen(8080, function(){
  var testUser = new user({
    name: "sterge",
    full: "Steve Earwin",
    mail: "bob@katter.co"
  })
  console.log(testUser)
})
