
const accountSid = "ACb8693c363787caea7777d3d614710d9c";
const authToken = "e25df4bc710948dfaa73f8852f0608c2";
const client = require('twilio')(accountSid, authToken);


client.messages
      .create({
        contentSid:'HX73bcbf7ae3e0abcc67870dac8c2f331c',
        from:'MGfa4559389cf283c21df4ca86a0a47db9',
         contentVariables: JSON.stringify({
           1: 'Name'
         }),
         to: 'whatsapp:+972528080757'
       })
      .then(message => console.log(message.sid));

