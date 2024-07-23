const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;

const app = express();
const PORT = process.env.PORT || 5000;

// Parse incoming requests as JSON
app.use(bodyParser.urlencoded({ extended: false }));



// Handle incoming messages from Twilio
app.post('/', (req, res) => {
    console.log(req.body);
  const twiml = new MessagingResponse();
  const message = twiml.message();

  // Get the incoming message
  const incomingMessage = req.body.Body;

  // Check if the incoming message is the first message from this number
  if (!req.body.NumMedia) {
    // Send the welcome message
    message.body(`שלום וברוכים הבאים לוולנס 
    אנא בחר את השירות המבוקש:
    1. לניקוי רעלים
    2. לטיפול אנרגיה 
    3. למשרדים
    4. לטיפול אולטרסאונד
    5. אחר`);

  } else {
    // Handle subsequent messages based on the user's input
    switch (incomingMessage) {
      case '1':
        message.body(`בחרת  לניקוי רעלים `);
        break;
      case '2':
        message.body(`בחרת  לטיפול אנרגיה`);
        break;
      case '3':
        message.body(`למשרדים`);
        break;
      case '4':
        message.body(" לטיפול אולטרסאונד");
        break;
      case '5':
        message.body(`אחר`);
        break;
      default:
        message.body(`שלום וברוכים הבאים לוולנס 
        אנא בחר את השירות המבוקש:
        1. לניקוי רעלים
        2. לטיפול אנרגיה 
        3. למשרדים
        4. לטיפול אולטרסאונד
        5. אחר`);
        break;
    }
  }

  // Send the autoresponse back to the user
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
