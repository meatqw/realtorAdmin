const path = require('path');

class IndexController {
    async render(req, res) {
      res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
    }
    
  }
  
  module.exports = new IndexController();
  