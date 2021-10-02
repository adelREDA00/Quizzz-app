const express = require('express');
const app = express();
const port = process.env.PORT
const req = require('request');
app.listen(port ||5500, () => {
  });
  app.use(express.static('public'));

  app.get('/apiQst',async (request,response)=>{
    req("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",async(error,ansr)=>{
        const data = await JSON.parse(ansr.body)
        response.json(data)
    })
  })