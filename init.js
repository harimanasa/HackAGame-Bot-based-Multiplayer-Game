var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');
// Initialize
var bot = new FBBotFramework({
    page_token: 'EAAThjJdzcvwBANiMcJNUMXOzpZBCGCjqn6j11EtPXZBebyejKx12KNwNKYVYkRTe0RJNn52AIyAh7IE16qOMypBc1VC5Ds8Kk2NOBaZCHli6xAZBZA0YlZAPuWOciP8Haa5Chgv4jYzkysVu7uwOrDdZAOA1dZBeeM06rCGOpwusGnBxBrA3X',
    /*101243721347996
    EAAThjJdzcvwBAFwFpWZAD17nWzgyjNbpUqHZALujxFCCZC6aJ9QU1Ui4SXX0SjNfVt8k99msCZBgcYI1ZBFcuOrbt6FjgbvI2ZCCyGkZBqmyeSrTXXYLI3t9szQnhsNxsNowe2pair18bAZAVoQAL8fYujZCwsZAIraAnKhUht2iSatD83qDEs0K*/
    verify_token: 'verify_token'
});
// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());
// Setup listener for incoming messages
var HashMap = require('hashmap');
var map = new HashMap();
var msgmap = new HashMap();
var userArray = [];

bot.on('message', function(userId, message){
    if(message.toString()=='hello'){
        bot.sendTextMessage(userId, 'Send your face');
    }
    if(message.includes("🐽")){
        if(map.get(userId) == undefined){
            console.log('Its in undefined');
            map.set(userId, 1);
            msgmap.set(userId, message);
            //bot.sendTextMessage(userId, 'Game starts now');
            userArray.push(userId);
        }
        if(map.size==2){
            console.log('Game over ');
            console.log(message);
            bot.sendTextMessage(userArray[1], msgmap.get(userArray[0]));
            bot.sendTextMessage(userArray[0], msgmap.get(userArray[1]));
            //bot.sendTextMessage(userArray[0], msgmap.get(userArray[0]));
        }
    }
    else if(message == 'play'){
        bot.sendTextMessage(userId, 'Game starts now. Send your face and name !');
    }
    console.log(message.toString());
});
app.get('/', function (req, res){
    res.send('Hi! This is Manasa');
});
//Make Express listening
app.listen(4040);
