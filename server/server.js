const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const data = require('../json/content.js');

var filter = require('./filter');

app.get('/script-school', (req, res) => {
  var type = req.param('type');
  var topic = req.param('topic');
  if(type && topic){
      let quesAns = filter.quesAns( topic, data.data[req.param('type')] );
      res.send(quesAns);
  }else{
     let dataToSend = filter.topics(data.data[req.param('type')]);
     res.send(dataToSend);
  }
 
});

app.get('/script-school/:type', (req,res,next) => {
  console.log("parameter",req.params.type);
  console.log(data[req.params.type]);
   res.send(data);
})
app.listen(port, () => console.log(`Listening on port ${port}`));
