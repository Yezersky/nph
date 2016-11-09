const parseString = require('xml2js').parseString

module.exports = {
  parse: function (xml) {
    return new Promise((resolve, reject)=> {
      parseString(xml, function (err, result) {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}