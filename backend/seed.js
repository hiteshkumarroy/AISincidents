require('dotenv').config();
const mongoose = require('mongoose');
const Incident = require('./models/Incident');

const sampleIncidents = [
  {
    title: "Unauthorized Data Access",
    description: "AI system accessed user data without proper authorization due to a misconfigured access control.",
    severity: "High"
  },
  {
    title: "Bias in Hiring Algorithm",
    description: "AI recruitment tool showed preference for male candidates in technical roles.",
    severity: "Medium"
  },
  {
    title: "Chatbot Offensive Language",
    description: "Chatbot started using inappropriate language after being trained on unmoderated user inputs.",
    severity: "Low"
  }
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB for seeding');
  
  // Clear existing data
  await Incident.deleteMany({});
  console.log('Cleared existing incidents');
  
  // Insert sample data
  await Incident.insertMany(sampleIncidents);
  console.log('Added sample incidents');
  
  mongoose.connection.close();
})
.catch(err => {
  console.error('Seeding error:', err);
  mongoose.connection.close();
});