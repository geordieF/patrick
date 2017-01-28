const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename)
// Base user class
class user {
  constructor(data) {
    if (data.constructor == Object) {
      fs.readFile(appDir + "/users.json",(err,d) => {
        d = JSON.parse(d)
        var fl = d.filter(function(c) {
          return c.email == data.email
        })

        if (fl.length > 0) {
          return false
        } else {
          if (!fl[0].name) {
            return 3
          }
          if (!fl[0].name) {
            return 3
          }
          if (!fl[0].name) {
            return 3
          }
          this.user = fl[0]
          return this.user
        }
      })
    } else if (data.constructor == String){
      fs.readFile(appDir + "/users.json",(err,d) => {
        d = JSON.parse(d)
        var fl = d.filter(function(c) {
          return c.email == data
        })
        if (fl.length > 0) {
          this.user = fl[0]
          return this.user
        } else {
          return false
          console.error("Multiple users with name " + data)
        }

      })
    } else {
      return false
      console.error("Bad data!")
    }
  }
}
// Module Exports
module.exports = user
