const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  alias: {
    docs: path.resolve(__dirname, './docs')
  }
}