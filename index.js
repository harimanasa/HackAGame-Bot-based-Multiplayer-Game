var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');
// Initialize
var bot = new FBBotFramework({
    page_token: 'EAAThjJdzcvwBAFwFpWZAD17nWzgyjNbpUqHZALujxFCCZC6aJ9QU1Ui4SXX0SjNfVt8k99msCZBgcYI1ZBFcuOrbt6FjgbvI2ZCCyGKZBkZBqmyeSrTXXYLI3t9szQnhsNxsNowe2pair18bAZAVoQAL8fYujZCwsZAIraAnKhUht2iSatD83qDEs0K',
    /*101243721347996
    EAAThjJdzcvwBAFwFpWZAD17nWzgyjNbpUqHZALujxFCCZC6aJ9QU1Ui4SXX0SjNfVt8k99msCZBgcYI1ZBFcuOrbt6FjgbvI2ZCCyGKZBkZBqmyeSrTXXYLI3t9szQnhsNxsNowe2pair18bAZAVoQAL8fYujZCwsZAIraAnKhUht2iSatD83qDEs0K*/
    verify_token: 'verify_token'
});
// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());
// Setup listener for incoming messages
bot.on('message', function(userId, message){
    bot.sendTextMessage(userId, 'Hello Hackathon Silly Billy');
    //alert('Received user message');
    //bot.sendImageMessage(userId, 'test.jpeg');
});
app.get('/', function (req, res){
res.send('Hi! This is Manasa');
});
//Make Express listening
app.listen(4040);
