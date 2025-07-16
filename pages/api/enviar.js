var api = require('./api.js');

var smsApi = new api.SMSApi("USERNAME", "API_KEY");

var smsMessage = new api.SmsMessage();

smsMessage.source = "sdk";
smsMessage.to = "+0451111111";
smsMessage.body = "test message";

var smsCollection = new api.SmsMessageCollection();

smsCollection.messages = [smsMessage];

smsApi.smsSendPost(smsCollection).then(function(response) {
  console.log(response.body);
}).catch(function(err){
  console.error(err.body);
});