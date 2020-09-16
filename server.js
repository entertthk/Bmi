const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    //console.log(request.body);
    
    response.sendFile(__dirname + '/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let weight = Number(request.body.weight);
    let height = Number(request.body.height);
    let result = weight / ((height/100) * (height/100));
    console.log(result);
    //console.log(`${weight} / ${height} = ${result}`);
    //response.send(`${weight} / ${height} = ${result}`)

    if (result <= 19) {
        response.send("Alakaal");
      } 
    else if (result > 19 && result <= 24.9) {
        response.send(`Normaalkaal`);
      } 
    else if (result >= 25 && result <= 29.9) {
        response.send(`Ülekaal`);
      
      } 
    else {
        response.send(`Rasvumine`);
      }
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});