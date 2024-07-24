import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://www.cloversal.com', // Replace with your frontend URL
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/test', (req, res) => {
    res.send('Server is up and running!');
});

// POST endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, email, phone, interest, message } = req.body;
  
  sendEmailNotification({ firstName, lastName, email, phone, interest, message }, (err, info) => {
    if (err) {
      console.error('Error sending email: ', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(200).send('Form submitted successfully');
    }
  });
});

// Function to send email notification
function sendEmailNotification(formData, callback) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'daydox24@gmail.com', // Replace with your email
      pass: 'nasjuopfelfjapca' // Replace with your email password
    }
  });

  const mailOptions = {
    from: 'daydox24@gmail.com', // Replace with your email
    to: 'instaone791@gmail.com', // Replace with recipient's email
    subject: 'New Form Submission',
    text: `You have a new form submission:\n\n${JSON.stringify(formData, null, 2)}`
  };

  transporter.sendMail(mailOptions, callback);
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
